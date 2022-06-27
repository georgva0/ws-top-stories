import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Subnav from "../components/Subnav";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Badge,
  Button,
} from "reactstrap";

const TopStoriesPage = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1eX_45LxEqExv5QIu2fbLR7iXuMp1u7Au3V9nGwDv8vU/values/rawData!A1:J40?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setArticles(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container className="content-container">
      <>
        <Row>
          <Col md="12">
            <h5 className="mt-4 p-2 text-white bg-secondary">
              Articles chosen as <strong>top stories</strong> by the{" "}
              <a
                href="https://www.bbc.co.uk/ws/languages"
                className="text-decoration-none underline"
              >
                BBC World Service
              </a>{" "}
              editorial teams. Titles are machine-translated.
            </h5>
          </Col>
        </Row>
        <Subnav />

        <Row>
          <Col sm="12">
            <h3 id="africa">Africa</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articles &&
            articles.values
              .filter((article) => {
                if (
                  article[5].includes("afaanoromoo") ||
                  article[5].includes("amharic") ||
                  article[5].includes("afrique") ||
                  article[5].includes("gahuza") ||
                  article[5].includes("hausa") ||
                  article[5].includes("igbo") ||
                  article[5].includes("pidgin") ||
                  article[5].includes("somali") ||
                  article[5].includes("swahili") ||
                  article[5].includes("tigrinya") ||
                  article[5].includes("yoruba")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[5]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[4]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[9]}
                        {article[3] && (
                          <Badge ml-3 color="danger">
                            {article[3]}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[2]}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="asia-central">Asia (Central)</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articles &&
            articles.values
              .filter((article) => {
                if (
                  article[5].includes("kyrgyz") ||
                  article[5].includes("uzbek")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[5]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[4]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[9]}
                        {article[3] && (
                          <Badge ml-3 color="danger">
                            {article[3]}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[2]}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="asia-pacific">Asia (Pacific)</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articles &&
            articles.values
              .filter((article) => {
                if (
                  article[5].includes("burmese") ||
                  article[5].includes("indonesia") ||
                  article[5].includes("japanese") ||
                  article[5].includes("korean") ||
                  article[5].includes("thai") ||
                  article[5].includes("vietnamese") ||
                  article[5].includes("zhongwen")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[5]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[4]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[3] && (
                          <Badge ml-3 color="danger">
                            {article[3]}
                          </Badge>
                        )}
                        {article[9]}{" "}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[2]}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="asia-south">Asia (South)</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articles &&
            articles.values
              .filter((article) => {
                if (
                  article[5].includes("bengali") ||
                  article[5].includes("gujarati") ||
                  article[5].includes("hindi") ||
                  article[5].includes("marathi") ||
                  article[5].includes("nepali") ||
                  article[5].includes("pashto") ||
                  article[5].includes("punjabi") ||
                  article[5].includes("sinhala") ||
                  article[5].includes("tamil") ||
                  article[5].includes("telugu") ||
                  article[5].includes("urdu")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[5]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[4]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[9]}
                        {article[3] && (
                          <Badge ml-3 color="danger">
                            {article[3]}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[2]}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="europe">Europe</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articles &&
            articles.values
              .filter((article) => {
                if (
                  article[5].includes("azeri") ||
                  article[5].includes("russian") ||
                  article[5].includes("serbian") ||
                  article[5].includes("turkce") ||
                  article[5].includes("ukrainian")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[5]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[4]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[3] && (
                          <Badge ml-3 color="danger">
                            {article[3]}
                          </Badge>
                        )}
                        {article[9]}{" "}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[2]}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="latin-america">Latin America</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articles &&
            articles.values
              .filter((article) => {
                if (
                  article[5].includes("portuguese") ||
                  article[5].includes("mundo")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[5]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[4]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[9]}
                        {article[3] && (
                          <Badge ml-3 color="danger">
                            {article[3]}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[2]}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
        </Row>

        <Row>
          <Col sm="12">
            <h3 id="middle-east">Middle East</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articles &&
            articles.values
              .filter((article) => {
                if (
                  article[5].includes("arabic") ||
                  article[5].includes("persian")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[5]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[4]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[9]}
                        {article[3] && (
                          <Badge ml-3 color="danger">
                            {article[3]}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[2]}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
        </Row>
      </>
    </Container>
  );
};

export default TopStoriesPage;
