import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import NavLink from './NavLink';

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Link to="/" className="navbar-brand">Tlmader</Link>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {links.map(link => (
              <LinkContainer to={link.to}>
                <NavItem>{link.label}</NavItem>
              </LinkContainer>
            ))}
          </Nav>
          <Nav pullRight>
            {externals.map(external => (
              <NavLink href={external.to} label={external.label} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/photos', label: 'Photos' }
];

const externals = [
  { to: 'https://github.com/tlmader', label: 'GitHub' },
  { to: 'https://www.linkedin.com/in/tlmader/', label: 'LinkedIn' }
];

export default NavbarInstance;
