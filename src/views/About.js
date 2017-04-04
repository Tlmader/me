import React, { Component } from 'react';
import JumbotronInstance from '../components/Jumbotron';

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <JumbotronInstance
          header="About" />
      </div>
    );
  }
}

export default About;
