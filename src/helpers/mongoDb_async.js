const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const connectionString = `mongodb+srv://${process.env["MONGO_DB_USERNAME"]}:${process.env["MONGO_DB_PASSWORD"]}@cluster0.aaxi8.mongodb.net/?retryWrites=true&w=majority`;

const translateHeadlines = async (articles) => {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
  if (!apiKey || articles.length === 0) return articles;

  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: articles.map((article) => article.headline),
          target: "en",
          format: "text",
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Google Translate returned ${response.status}`);
    }

    const result = await response.json();
    const translations = result.data?.translations;
    if (
      !Array.isArray(translations) ||
      translations.length !== articles.length
    ) {
      throw new Error("Google Translate returned an unexpected response");
    }

    return articles.map((article, index) => ({
      ...article,
      headline: translations[index].translatedText || article.headline,
    }));
  } catch (error) {
    console.error("Unable to translate article headlines", error);
    return articles;
  }
};

exports.getLatestArticles = async (
  limit = 24,
  serviceUrls = [],
  translate = true,
) => {
  const client = await MongoClient.connect(connectionString);

  try {
    const serviceFilter =
      Array.isArray(serviceUrls) && serviceUrls.length
        ? {
            $in: serviceUrls.map(
              (serviceUrl) => new RegExp(`/${serviceUrl}$`, "i"),
            ),
          }
        : null;
    const articles = await client
      .db("WorldServiceData")
      .collection("aresData")
      .find({
        cmsNotificationTimestamp: { $exists: true },
        ...(serviceFilter ? { "passport.home": serviceFilter } : {}),
        "promo.headlines.seoHeadline": { $exists: true, $ne: "" },
        "promo.locators.canonicalUrl": {
          $exists: true,
          $ne: null,
          $regex: /^https?:\/\//i,
        },
        "promo.images.defaultPromoImage.model.locator": {
          $exists: true,
          $ne: null,
          $regex: /^https?:\/\//i,
        },
      })
      .sort({ cmsNotificationTimestamp: -1 })
      .limit(limit)
      .project({
        _id: 0,
        cmsNotificationTimestamp: 1,
        "passport.home": 1,
        "promo.headlines.seoHeadline": 1,
        "promo.images.defaultPromoImage.model.locator": 1,
        "promo.locators.canonicalUrl": 1,
      })
      .toArray();

    const normalizedArticles = articles
      .map((article) => ({
        date: article.cmsNotificationTimestamp,
        service: article.passport?.home?.split("/").pop() || "World Service",
        headline: article.promo?.headlines?.seoHeadline || "",
        image: article.promo?.images?.defaultPromoImage?.model?.locator || null,
        url: article.promo?.locators?.canonicalUrl || null,
      }))
      .filter(
        (article) =>
          article.url &&
          /^https?:\/\//i.test(article.url) &&
          article.image &&
          /^https?:\/\//i.test(article.image),
      );

    return translate
      ? await translateHeadlines(normalizedArticles)
      : normalizedArticles;
  } finally {
    await client.close();
  }
};

exports.writeToMongo = async (document) => {
  let client = await MongoClient.connect(connectionString);

  let db = client.db("WorldServiceData");
  try {
    await db.collection("latest").insertOne(document);

    console.log(`Data packet sent`);
  } finally {
    client.close();
  }
};

exports.writeToMongoExtended = async (document) => {
  const ares = require("./ares");
  const enrichedDocument = await ares.enrichDocument(document);
  console.log("Enriched ARES fields:", {
    canonicalUrl: enrichedDocument.metadata?.locators?.canonicalUrl,
    createdBy: enrichedDocument.metadata?.createdBy,
    language: enrichedDocument.metadata?.language,
    consumableAsSFV: enrichedDocument.consumableAsSFV,
    seoHeadline: enrichedDocument.promo?.headlines?.seoHeadline,
    imageLocator:
      enrichedDocument.promo?.images?.defaultPromoImage?.model?.locator,
  });
  let client = await MongoClient.connect(connectionString);

  let db = client.db("WorldServiceData");
  try {
    const check = await db
      .collection("aresData")
      .countDocuments({ urn: enrichedDocument.urn }, { limit: 1 });
    let storedDocument;

    if (check === 0) {
      const result = await db
        .collection("aresData")
        .insertOne(enrichedDocument);
      storedDocument = { _id: result.insertedId };
      console.log(`New document uploaded`);
    } else {
      storedDocument = await db
        .collection("aresData")
        .findOne({ urn: enrichedDocument.urn }, { projection: { _id: 1 } });
      await db
        .collection("aresData")
        .replaceOne({ urn: enrichedDocument.urn }, enrichedDocument);
    }

    //purge older documents
    const updatedCollection = await db
      .collection("aresData")
      .find({ "passport.language": enrichedDocument.passport.language })
      .sort({ cmsNotificationTimestamp: -1 })
      .toArray();

    const itemsToDelete = updatedCollection.slice(30);

    await db
      .collection("aresData")
      .deleteMany({ _id: { $in: itemsToDelete.map((v) => v._id) } });

    console.log(`Purged ${itemsToDelete.length} documents`);

    //log document

    const cmsDate = new Date(
      enrichedDocument.cmsNotificationTimestamp,
    ).toLocaleDateString("en-UK");
    const mongoInputDate = new Date(
      storedDocument._id.getTimestamp(),
    ).toLocaleDateString("en-GB");
    // const todayDate = new Date().toLocaleDateString('en-UK');

    if (enrichedDocument.action === "Published" && cmsDate === mongoInputDate) {
      //check if there are any documents counted under the document's date

      const checkDate = await db
        .collection("aresReports")
        .countDocuments({ date: cmsDate }, { limit: 1 });

      if (checkDate === 0) {
        //if there are no documents counted under the document's date, create a new entry
        await db.collection("aresReports").insertOne({
          date: cmsDate,
          serviceStatus: [{ home: enrichedDocument.passport.home, count: 1 }],
        });
        console.log(`An entry for ${cmsDate} has been added to the logs`);
      } else {
        const target = await db
          .collection("aresReports")
          .findOne({ date: cmsDate });
        //if there are documents counted under the document's date, for this service, increment the count
        if (
          target.serviceStatus
            .map((x) => x.home)
            .includes(enrichedDocument.passport.home)
        ) {
          await db.collection("aresReports").updateOne(
            {
              date: cmsDate,
              "serviceStatus.home": enrichedDocument.passport.home,
            },
            { $inc: { "serviceStatus.$.count": 1 } },
          );
          console.log(`An entry for ${cmsDate} has been incremented`);
        } else {
          await db.collection("aresReports").updateOne(
            { date: cmsDate },
            {
              $push: {
                serviceStatus: {
                  home: enrichedDocument.passport.home,
                  count: 1,
                },
              },
            },
          );
        }

        console.log(
          `Service ${enrichedDocument.passport.home} has been added to ${cmsDate}`,
        );
      }
    }
    //end of document log
  } finally {
    client.close();
  }
};

exports.cleanMongo = async (document) => {
  let client = await MongoClient.connect(connectionString);

  let db = client.db("WorldServiceData");
  try {
    if (document[0]) {
      if (document[0].relatedContent) {
        console.log("relatedContent found");
        if (document[0].relatedContent.site) {
          console.log("site found");
          if (document[0].relatedContent.site.uri) {
            console.log("uri found");

            const uri = document[0].relatedContent.site.uri;
            await db
              .collection("latest")
              .deleteMany({ "articlesJson.relatedContent.site.uri": uri });
          }
        }
      }
    }
    console.log(`Cleanup complete`);
  } finally {
    client.close();
  }
};

exports.removeEmptyMongo = async () => {
  let client = await MongoClient.connect(connectionString);

  let db = client.db("WorldServiceData");
  try {
    await db.collection("latest").deleteMany({ articlesJson: [] });

    console.log(`Empty arrays have been removed.`);
  } finally {
    client.close();
  }
};
