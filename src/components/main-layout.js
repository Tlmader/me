import React, { Component } from 'react';
import { Link } from 'react-router';

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <header>Header</header>
        <main>
          {this.props.children}
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default MainLayout;
