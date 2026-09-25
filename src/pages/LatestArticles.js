import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import LatestArticlesSubnav from "../components/LatestArticlesSubnav";

const rightAlignedServices = new Set(["urdu", "pashto", "arabic", "persian"]);

const formatPublishedAge = (timestamp) => {
  if (!timestamp) return "";

  const publishedAt = new Date(timestamp);
  const now = new Date();
  const diffMinutes = Math.max(0, Math.round((now - publishedAt) / 60000));

  if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes === 1 ? "" : "s"} ago`;
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 6) {
    return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  }

  return publishedAt.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });
};

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState({
    label: "All services",
    serviceUrls: [],
  });
  const [translateHeadlines, setTranslateHeadlines] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const queryParams = new URLSearchParams({
      translate: String(translateHeadlines),
    });
    if (selectedFilter.serviceUrls.length) {
      queryParams.set("services", selectedFilter.serviceUrls.join(","));
    }

    fetch(`/api/latest-articles?${queryParams.toString()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load latest articles");
        }
        return response.json();
      })
      .then(setArticles)
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [selectedFilter, translateHeadlines]);

  return (
    <Container className="content-container">
      <Row>
        <Col md="12">
          <h5 className="latest-articles-banner mt-4 p-2 text-white">
            The latest articles published by BBC World Service languages. Titles
            are machine-translated.{" "}
          </h5>
        </Col>
      </Row>

      <LatestArticlesSubnav onFilterChange={setSelectedFilter} />

      <Row>
        <Col sm="12">
          <h3 id="all-services">{selectedFilter.label}</h3>
        </Col>
      </Row>

      <div className="translation-toggle">
        <Input
          id="translate-headlines"
          type="checkbox"
          checked={translateHeadlines}
          onChange={(event) => setTranslateHeadlines(event.target.checked)}
        />
        <Label check htmlFor="translate-headlines">
          {translateHeadlines ? "Remove translation" : "Show titles in English"}
        </Label>
      </div>

      <Row md="4" sm="2" xs="1" className="mt-3">
        {isLoading && <Loader />}
        {!isLoading && articles.length === 0 && (
          <Col>
            <p className="text-muted">No latest articles are available.</p>
          </Col>
        )}
        {articles.map((article) => (
          <Col key={article.url}>
            <Card className="border-0">
              <Badge color="secondary" className="mb-2">
                {article.service.toUpperCase()}
              </Badge>
              {article.image ? (
                <a href={article.url} className="stretched-link">
                  <CardImg
                    alt={article.headline}
                    src={article.image}
                    top
                    width="100%"
                  />
                </a>
              ) : (
                <div className="card-image-placeholder">No image</div>
              )}
              <CardBody className="mx-0 px-0">
                <CardTitle
                  tag="h5"
                  className={
                    rightAlignedServices.has(article.service.toLowerCase())
                      ? "latest-article-headline--right"
                      : ""
                  }
                >
                  {article.headline}
                </CardTitle>
                <div className="text-muted small mt-2">
                  {formatPublishedAge(article.date)}
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestArticles;
