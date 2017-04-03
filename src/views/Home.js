import React, { Component } from 'react';
import JumbotronInstance from '../components/Jumbotron';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <JumbotronInstance
          header="Hello, world!"
          description="My name is Ted. I live in New Orleans and build software." />
      </div>
    );
  }
}

export default Home;
