import React from "react";
import { Nav, NavLink } from "reactstrap";

export default class Subnav extends React.Component {
  render() {
    return (
      <div>
        <Nav pills justified>
          <NavLink className="text-danger" href="#africa">
            Africa
          </NavLink>
          <NavLink className="text-danger" href="#asia-central">
            Asia (Central)
          </NavLink>{" "}
          <NavLink className="text-danger" href="#asia-pacific">
            Asia (Pacific)
          </NavLink>{" "}
          <NavLink className="text-danger" href="#asia-south">
            Asia (South)
          </NavLink>{" "}
          <NavLink className="text-danger" href="#europe">
            Europe
          </NavLink>{" "}
          <NavLink className="text-danger" href="#latin-america">
            Latin America
          </NavLink>{" "}
          <NavLink className="text-danger" href="#middle-east">
            Middle East
          </NavLink>{" "}
        </Nav>
      </div>
    );
  }
}
