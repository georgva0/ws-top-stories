import React, { useState } from "react";

import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
  Container,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Navbar className="site-navbar" expand="md" light>
        <NavbarBrand href="/" className="py-1">
          <span className="brand-mark">No1</span>
          <span className="brand-name">World Service top stories</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/" className="home-nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/latest-articles">Latest articles</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                href="/top-stories"
                className={url === "/top-stories" ? " active" : ""}
              >
                TOP STORIES
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink
                href="/most-read"
                className={url === "/most-read" ? " active" : ""}
              >
                MOST READ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/emerging-stories"
                className={url === "/emerging-stories" ? " active" : ""}
              >
                EMERGING STORIES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/emerging-stories"
                className={url === "/emerging-stories" ? " active" : ""}
              >
                EMERGING STORIES
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
