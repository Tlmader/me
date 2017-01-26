import React, { Component } from 'react';
import { Link } from 'react-router';
import NavbarInstance from '../components/Navbar';

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <header>Header</header>
        <NavbarInstance />
        <main>
          {this.props.children}
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default MainLayout;
