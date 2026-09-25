const http = require("http");
const { getLatestArticles } = require("./src/helpers/mongoDb_async");

const port = 4000;

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname === "/api/latest-articles") {
    try {
      const serviceUrls = requestUrl.searchParams
        .get("services")
        ?.split(",")
        .filter(Boolean) || [];
      const translate = requestUrl.searchParams.get("translate") !== "false";
      const articles = await getLatestArticles(24, serviceUrls, translate);
      const normalized = articles.map((article) => ({
        ...article,
        image: article.image || null,
      }));
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify(normalized));
      return;
    } catch (error) {
      console.error("Failed to load latest articles", error);
      res.writeHead(500, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify({ message: "Unable to load latest articles" }));
      return;
    }
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Not found" }));
});

server.listen(port, () => {
  console.log(`Local API running on http://localhost:${port}`);
});
