import React, { Component } from 'react';
import NavbarInstance from '../components/Navbar';

export default class MainLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavbarInstance />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
