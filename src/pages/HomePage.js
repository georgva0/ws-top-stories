import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Badge,
  CardImg,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import classnames from "classnames";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <Container className="content-container">
        <Nav className="mt-4 mb-4 nav-justified" tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Top stories
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Most read
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col md="10">
                <p className="mt-4">
                  Articles chosen as <strong>top stories</strong> by the{" "}
                  <a
                    href="https://www.bbc.co.uk/ws/languages"
                    className="text-dark text-decoration-none underline"
                  >
                    BBC World Service
                  </a>{" "}
                  editorial teams. Titles are machine-translated.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="africa">Africa</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="asia-pacific">Asia (Pacific)</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="asia-south">Asia (South)</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="europe">Europe</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="latin-america">Latin America</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="middle-east">Middle East</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col md="10">
                <p className="mt-4">
                  <strong>Most read</strong> articles on
                  <a
                    href="https://www.bbc.co.uk/ws/languages"
                    className="text-dark text-decoration-none underline"
                  >
                    {" "}
                    BBC World Service
                  </a>{" "}
                  languages websites. Titles are machine-translated.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="africa1">Africa</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="asia-pacific1">Asia (Pacific)</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="asia-south1">Asia (South)</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="europe1">Europe</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="latin-america1">Latin America</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <h3 id="middle-east1">Middle East</h3>
                <Row md="4" sm="2" xs="1" className="mt-3">
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="border-0">
                      <Badge color="secondary" className="mb-2">
                        BBC NEWS | SERVICE
                      </Badge>
                      <a
                        href={`https://www.bbc.com/news`}
                        className="stretched-link"
                      >
                        <CardImg
                          alt="Text for alt"
                          src="https://placehold.jp/30/dd6699/ffffff/976x549.png?text=placeholder+image"
                          top
                          width="100%"
                        />
                      </a>

                      <CardBody className="mx-0 px-0">
                        <CardTitle tag="h5">Article title </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          7 June
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}
