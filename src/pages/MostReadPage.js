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

const MostReadPage = () => {
  const [mostReadArticles, setMostReadArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1ZsXT1Un8t8sZw5tgYYej_o9yyjN-YCi09Owy1joACAw/values/rawData!A1:J40?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMostReadArticles(data);
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
            {/* <Button color="secondary" className="mt-4 disabled">
              <strong>Most read</strong> articles on
              <a
                href="https://www.bbc.co.uk/ws/languages"
                className="text-decoration-none underline"
              >
                {" "}
                BBC World Service
              </a>{" "}
              languages websites. Titles are machine-translated.
            </Button> */}
            <h5 className="mt-4 p-2 text-white bg-secondary">
              <strong>Most read</strong> articles on
              <a
                href="https://www.bbc.co.uk/ws/languages"
                className="text-decoration-none underline"
              >
                {" "}
                BBC World Service
              </a>{" "}
              languages websites. Titles are machine-translated.
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
          {mostReadArticles &&
            mostReadArticles.values
              .filter((article) => {
                if (
                  article[4].includes("afaanoromoo") ||
                  article[4].includes("amharic") ||
                  article[4].includes("afrique") ||
                  article[4].includes("gahuza") ||
                  article[4].includes("hausa") ||
                  article[4].includes("igbo") ||
                  article[4].includes("pidgin") ||
                  article[4].includes("somali") ||
                  article[4].includes("swahili") ||
                  article[4].includes("tigrinya") ||
                  article[4].includes("yoruba")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[5].toUpperCase()}
                    </Badge>
                    <a href={article[4]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[1]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">{article[7]} </CardTitle>
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
          {mostReadArticles &&
            mostReadArticles.values
              .filter((article) => {
                if (
                  article[4].includes("kyrgyz") ||
                  article[4].includes("uzbek")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[5].toUpperCase()}
                    </Badge>
                    <a href={article[4]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[1]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">{article[7]} </CardTitle>
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
          {mostReadArticles &&
            mostReadArticles.values
              .filter((article) => {
                if (
                  article[4].includes("burmese") ||
                  article[4].includes("indonesia") ||
                  article[4].includes("japanese") ||
                  article[4].includes("korean") ||
                  article[4].includes("thai") ||
                  article[4].includes("vietnamese") ||
                  article[4].includes("zhongwen")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[5].toUpperCase()}
                    </Badge>
                    <a href={article[4]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[1]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">{article[7]} </CardTitle>
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
          {mostReadArticles &&
            mostReadArticles.values
              .filter((article) => {
                if (
                  article[4].includes("bengali") ||
                  article[4].includes("gujarati") ||
                  article[4].includes("hindi") ||
                  article[4].includes("marathi") ||
                  article[4].includes("nepali") ||
                  article[4].includes("pashto") ||
                  article[4].includes("punjabi") ||
                  article[4].includes("sinhala") ||
                  article[4].includes("tamil") ||
                  article[4].includes("telugu") ||
                  article[4].includes("urdu")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[5].toUpperCase()}
                    </Badge>
                    <a href={article[4]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[1]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">{article[7]} </CardTitle>
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
          {mostReadArticles &&
            mostReadArticles.values
              .filter((article) => {
                if (
                  article[4].includes("azeri") ||
                  article[4].includes("russian") ||
                  article[4].includes("serbian") ||
                  article[4].includes("turkce") ||
                  article[4].includes("ukrainian")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[5].toUpperCase()}
                    </Badge>
                    <a href={article[4]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[1]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">{article[7]} </CardTitle>
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
          {mostReadArticles &&
            mostReadArticles.values
              .filter((article) => {
                if (
                  article[4].includes("portuguese") ||
                  article[4].includes("mundo")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[5].toUpperCase()}
                    </Badge>
                    <a href={article[4]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[1]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">{article[7]} </CardTitle>
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
          {mostReadArticles &&
            mostReadArticles.values
              .filter((article) => {
                if (
                  article[4].includes("arabic") ||
                  article[4].includes("persian")
                ) {
                  return article;
                }
              })
              .map((article, key) => (
                <Col key={key}>
                  {" "}
                  <Card className="border-0">
                    <Badge color="secondary" className="mb-2">
                      {article[5].toUpperCase()}
                    </Badge>
                    <a href={article[4]} className="stretched-link">
                      <CardImg
                        alt={article[0]}
                        src={article[1]}
                        top
                        width="100%"
                      />
                    </a>

                    <CardBody className="mx-0 px-0">
                      <CardTitle tag="h5">{article[7]} </CardTitle>
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

export default MostReadPage;
