import React from "react";
import { Nav, NavLink } from "reactstrap";

export default class Subnav extends React.Component {
  render() {
    return (
      <div className="section-nav-wrap">
        <div className="section-nav-label">Browse regions</div>
        <Nav pills className="section-nav" aria-label="Browser regions">
          <NavLink href="#africa">Africa</NavLink>
          <NavLink href="#asia-central">Asia (Central)</NavLink>{" "}
          <NavLink href="#asia-pacific">Asia (Pacific)</NavLink>{" "}
          <NavLink href="#asia-south">Asia (South)</NavLink>{" "}
          <NavLink href="#europe">Europe</NavLink>{" "}
          <NavLink href="#latin-america">Latin America</NavLink>{" "}
          <NavLink href="#middle-east">Middle East</NavLink>{" "}
        </Nav>
      </div>
    );
  }
}
