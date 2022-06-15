import React from "react";
import { Container, Row, Col } from "reactstrap";

const NotFound = () => {
  return (
    <Container className="content-container">
      <Row>
        <Col md="10">
          <>
            <h1 className="mt-5">404 error</h1>
            <h5 className="mt-5">
              This page does no exist. Access the site menu to navigate to a
              valid destination.
            </h5>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
