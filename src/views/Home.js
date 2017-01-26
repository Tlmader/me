import React, { Component } from 'react';
import JumbotronInstance from '../components/Jumbotron';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <JumbotronInstance />
      </div>
    );
  }
}

export default Home;
