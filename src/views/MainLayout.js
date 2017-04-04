import React, { Component } from 'react';
import NavbarInstance from '../components/Navbar';

class MainLayout extends Component {
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

export default MainLayout;