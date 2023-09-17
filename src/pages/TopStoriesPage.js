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
} from "reactstrap";

const TopStoriesPage = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      // `https://sheets.googleapis.com/v4/spreadsheets/1eX_45LxEqExv5QIu2fbLR7iXuMp1u7Au3V9nGwDv8vU/values/rawData!A1:J40?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
      `https://sheets.googleapis.com/v4/spreadsheets/1eX_45LxEqExv5QIu2fbLR7iXuMp1u7Au3V9nGwDv8vU/values/topItems!A2:J41?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
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
              editorial teams (Live events are not currently included). Titles are machine-translated.
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
                  article[0].includes("afaanoromoo") ||
                  article[0].includes("amharic") ||
                  article[0].includes("afrique") ||
                  article[0].includes("gahuza") ||
                  article[0].includes("hausa") ||
                  article[0].includes("igbo") ||
                  article[0].includes("pidgin") ||
                  article[0].includes("somali") ||
                  article[0].includes("swahili") ||
                  article[0].includes("tigrinya") ||
                  article[0].includes("yoruba")
                ) {
                  return article;
                }
                return false;
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[0]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[5]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[1] && (
                          <Badge ml-3 color="danger">
                            {article[1]}
                          </Badge>
                        )}
                        {article[9]}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[7]}
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
                  article[0].includes("kyrgyz") ||
                  article[0].includes("uzbek")
                ) {
                  return article;
                }
                return false;
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[0]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[5]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[9]}
                        {article[1] && (
                          <Badge ml-3 color="danger">
                            {article[1]}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[7]}
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
                  article[0].includes("burmese") ||
                  article[0].includes("indonesia") ||
                  article[0].includes("japanese") ||
                  article[0].includes("korean") ||
                  article[0].includes("thai") ||
                  article[0].includes("vietnamese") ||
                  article[0].includes("zhongwen")
                ) {
                  return article;
                }
                return false;
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[0]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[5]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[1] && (
                          <Badge ml-3 color="danger">
                            {article[1]}
                          </Badge>
                        )}
                        {article[9]}{" "}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[7]}
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
                  article[0].includes("bengali") ||
                  article[0].includes("gujarati") ||
                  article[0].includes("hindi") ||
                  article[0].includes("marathi") ||
                  article[0].includes("nepali") ||
                  article[0].includes("pashto") ||
                  article[0].includes("punjabi") ||
                  article[0].includes("sinhala") ||
                  article[0].includes("tamil") ||
                  article[0].includes("telugu") ||
                  article[0].includes("urdu")
                ) {
                  return article;
                }
                return false;
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[0]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[5]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[1] && (
                          <Badge ml-3 color="danger">
                            {article[1]}
                          </Badge>
                        )}
                        {article[9]}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[7]}
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
                  article[0].includes("azeri") ||
                  article[0].includes("russian") ||
                  article[0].includes("serbian") ||
                  article[0].includes("turkce") ||
                  article[0].includes("ukrainian")
                ) {
                  return article;
                }
                return false;
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[0]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[5]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        {article[1] && (
                          <Badge ml-3 color="danger">
                            {article[1]}
                          </Badge>
                        )}
                        {article[9]}{" "}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[7]}
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
                  article[0].includes("portuguese") ||
                  article[0].includes("mundo")
                ) {
                  return article;
                }
                return false;
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[0]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[5]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        
                        {article[1] && (
                          <Badge ml-3 color="danger">
                            {article[1]}
                          </Badge>
                        )}
                        {article[9]}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[7]}
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
                  article[0].includes("arabic") ||
                  article[0].includes("persian")
                ) {
                  return article;
                }
                return false;
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[6].toUpperCase()}
                    </Badge>
                    <a href={article[0]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[5]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">
                        
                        {article[1] && (
                          <Badge ml-3 color="danger">
                            {article[1]}
                          </Badge>
                        )}
                        {article[9]}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {article[7]}
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
