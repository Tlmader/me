import React, { Component } from 'react';
import JumbotronInstance from '../components/Jumbotron';

export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <JumbotronInstance
          header="About" />
      </div>
    );
  }
}
