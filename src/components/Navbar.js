import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Link to="/" className="navbar-brand">Tlmader</Link>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavItem>Projects</NavItem>
            </LinkContainer>
            <LinkContainer to="/photos">
              <NavItem>Photos</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem href="https://github.com/tlmader">GitHub</NavItem>
            <NavItem href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarInstance;
