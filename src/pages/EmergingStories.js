import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import SubnavAlt from "../components/SubnavAlt";
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

const EmergingStoriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [articlesAll, setArticlesAll] = useState();
  const [articlesAfrica, setArticlesAfrica] = useState();
  const [articlesAsiaPacific, setArticlesAsiaPacific] = useState();
  const [articlesAsiaSouth, setArticlesAsiaSouth] = useState();
  const [articlesEurope, setArticlesEurope] = useState();
  const [articlesAmericas, setArticlesAmericas] = useState();
  const [articlesMiddleEast, setArticlesMiddleEast] = useState();

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1NV7u6VJmcZamdmd5MA0YJ1TPo_PD5uB4fP6Knu4nsSI/values/all!A1:J9?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.values.shift();
          setArticlesAll(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1NV7u6VJmcZamdmd5MA0YJ1TPo_PD5uB4fP6Knu4nsSI/values/africa!A1:J9?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.values.shift();
          setArticlesAfrica(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1NV7u6VJmcZamdmd5MA0YJ1TPo_PD5uB4fP6Knu4nsSI/values/asia-pacific!A1:J9?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.values.shift();
          setArticlesAsiaPacific(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1NV7u6VJmcZamdmd5MA0YJ1TPo_PD5uB4fP6Knu4nsSI/values/asia-south!A1:J9?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.values.shift();
          setArticlesAsiaSouth(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1NV7u6VJmcZamdmd5MA0YJ1TPo_PD5uB4fP6Knu4nsSI/values/europe!A1:J9?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.values.shift();
          setArticlesEurope(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1NV7u6VJmcZamdmd5MA0YJ1TPo_PD5uB4fP6Knu4nsSI/values/americas!A1:J9?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.values.shift();
          setArticlesAmericas(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1NV7u6VJmcZamdmd5MA0YJ1TPo_PD5uB4fP6Knu4nsSI/values/middle-east!A1:J9?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          data.values.shift();
          setArticlesMiddleEast(data);
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
              Articles becoming <strong>popular</strong> in various{" "}
              <a
                href="https://www.bbc.co.uk/ws/languages"
                className="text-decoration-none underline"
              >
                BBC World Service
              </a>{" "}
              regions. Titles are machine-translated.
            </h5>
          </Col>
        </Row>
        <SubnavAlt />

        <Row>
          <Col sm="12">
            <h3 id="all-regions">All regions</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articlesAll &&
            articlesAll.values.map((article, key) => (
              <Col key={key}>
                {" "}
                <Card className="border-0">
                  <Badge color="secondary" className="mb-2">
                    {article[3].toUpperCase()}
                  </Badge>
                  <a
                    href={`https://www.${article[0]}`}
                    className="stretched-link"
                  >
                    <CardImg
                      alt={article[6]}
                      src={article[5]}
                      top
                      width="100%"
                    />
                  </a>

                  <CardBody className="mx-0 px-0">
                    <CardTitle tag="h5">{article[9]}</CardTitle>
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
            <h3 id="africa">Africa</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articlesAfrica &&
            articlesAfrica.values.map((article, key) => (
              <Col key={key}>
                {" "}
                <Card className="border-0">
                  <Badge color="secondary" className="mb-2">
                    {article[3].toUpperCase()}
                  </Badge>
                  <a
                    href={`https://www.${article[0]}`}
                    className="stretched-link"
                  >
                    <CardImg
                      alt={article[6]}
                      src={article[5]}
                      top
                      width="100%"
                    />
                  </a>

                  <CardBody className="mx-0 px-0">
                    <CardTitle tag="h5">{article[9]}</CardTitle>
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
          {articlesAsiaPacific &&
            articlesAsiaPacific.values.map((article, key) => (
              <Col key={key}>
                {" "}
                <Card className="border-0">
                  <Badge color="secondary" className="mb-2">
                    {article[3].toUpperCase()}
                  </Badge>
                  <a
                    href={`https://www.${article[0]}`}
                    className="stretched-link"
                  >
                    <CardImg
                      alt={article[6]}
                      src={article[5]}
                      top
                      width="100%"
                    />
                  </a>

                  <CardBody className="mx-0 px-0">
                    <CardTitle tag="h5">{article[9]}</CardTitle>
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
          {articlesAsiaSouth &&
            articlesAsiaSouth.values.map((article, key) => (
              <Col key={key}>
                {" "}
                <Card className="border-0">
                  <Badge color="secondary" className="mb-2">
                    {article[3].toUpperCase()}
                  </Badge>
                  <a
                    href={`https://www.${article[0]}`}
                    className="stretched-link"
                  >
                    <CardImg
                      alt={article[6]}
                      src={article[5]}
                      top
                      width="100%"
                    />
                  </a>

                  <CardBody className="mx-0 px-0">
                    <CardTitle tag="h5">{article[9]}</CardTitle>
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
          {articlesEurope &&
            articlesEurope.values.map((article, key) => (
              <Col key={key}>
                {" "}
                <Card className="border-0">
                  <Badge color="secondary" className="mb-2">
                    {article[3].toUpperCase()}
                  </Badge>
                  <a
                    href={`https://www.${article[0]}`}
                    className="stretched-link"
                  >
                    <CardImg
                      alt={article[6]}
                      src={article[5]}
                      top
                      width="100%"
                    />
                  </a>

                  <CardBody className="mx-0 px-0">
                    <CardTitle tag="h5">{article[9]}</CardTitle>
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
            <h3 id="americas">Latin America</h3>
          </Col>
        </Row>

        <Row md="4" sm="2" xs="1" className="mt-3">
          {isLoading && <Loader />}
          {articlesAmericas &&
            articlesAmericas.values.map((article, key) => (
              <Col key={key}>
                {" "}
                <Card className="border-0">
                  <Badge color="secondary" className="mb-2">
                    {article[3].toUpperCase()}
                  </Badge>
                  <a
                    href={`https://www.${article[0]}`}
                    className="stretched-link"
                  >
                    <CardImg
                      alt={article[6]}
                      src={article[5]}
                      top
                      width="100%"
                    />
                  </a>

                  <CardBody className="mx-0 px-0">
                    <CardTitle tag="h5">{article[9]}</CardTitle>
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
          {articlesMiddleEast &&
            articlesMiddleEast.values.map((article, key) => (
              <Col key={key}>
                {" "}
                <Card className="border-0">
                  <Badge color="secondary" className="mb-2">
                    {article[3].toUpperCase()}
                  </Badge>
                  <a
                    href={`https://www.${article[0]}`}
                    className="stretched-link"
                  >
                    <CardImg
                      alt={article[6]}
                      src={article[5]}
                      top
                      width="100%"
                    />
                  </a>

                  <CardBody className="mx-0 px-0">
                    <CardTitle tag="h5">{article[9]}</CardTitle>
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

export default EmergingStoriesPage;
