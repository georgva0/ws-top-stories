const { getLatestArticles } = require("../../src/helpers/mongoDb_async");

exports.handler = async (event) => {
  try {
    const serviceUrls =
      event.queryStringParameters?.services?.split(",").filter(Boolean) || [];
    const translate = event.queryStringParameters?.translate !== "false";
    const articles = await getLatestArticles(24, serviceUrls, translate);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
      body: JSON.stringify(articles),
    };
  } catch (error) {
    console.error("Unable to load latest articles", error);

    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Unable to load latest articles" }),
    };
  }
};
