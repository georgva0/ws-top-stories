import React, { useState } from "react";

import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  Container,
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/" className="py-1">
          <span className="mb-0 h1 text-danger">No 1 WS stories</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#africa">Africa</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/asia-central">Asia (Central)</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                href={
                  document.querySelector("#asia-pacific")
                    ? "#asia-pacific"
                    : "#asia-pacific1"
                }
              >
                Asia (Pacific)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#asia-south">Asia (South)</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#europe">Europe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#latin-america">Latin America</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#middle-east">Middle East </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
