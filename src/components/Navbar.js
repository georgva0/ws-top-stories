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
          <span className="mb-0 h1 text-danger">No1 WS articles</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/top-stories">TOP STORIES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/most-read">MOST READ</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
