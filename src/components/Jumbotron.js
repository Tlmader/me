import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class JumbotronInstance extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>My name is Ted. I live in New Orleans and build software.</p>
      </Jumbotron>
    );
  }
}

export default JumbotronInstance;
