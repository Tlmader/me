import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>My name is Ted. I live in New Orleans and build software.</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
