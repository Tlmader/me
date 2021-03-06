import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import NavLink from './NavLink';

const links = [
  { to: '/', label: 'Home' },
  { to: '/music', label: 'Music' },
  { to: '/projects', label: 'Projects' },
  { to: '/photos', label: 'Photos' }
];

const externals = [
  { to: 'https://github.com/tlmader', label: 'GitHub' },
  { to: 'https://www.linkedin.com/in/tlmader/', label: 'LinkedIn' },
  { to: 'https://www.pinterest.com/tlmader/', label: 'Pinterest' },
  { to: 'http://steamcommunity.com/id/tlmader/', label: 'Steam' }
];

export default class NavbarInstance extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Link to="/" className="navbar-brand">tlmader.me</Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {links.map((link, i) => (
              <LinkContainer to={link.to} key={i}>
                <NavItem>{link.label}</NavItem>
              </LinkContainer>
            ))}
          </Nav>
          <Nav pullRight>
            {externals.map((external, i) => (
              <NavLink href={external.to} label={external.label} key={i} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
