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
            <LinkContainer to="/projects">
              <NavItem>Projects</NavItem>
            </LinkContainer>
            <LinkContainer to="/photos">
              <NavItem>Photos</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarInstance;
