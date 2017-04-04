import React, { Component } from 'react';
import JumbotronInstance from '../components/Jumbotron';

class Projects extends Component {
  render() {
    return (
      <div className="projects-page">
        <JumbotronInstance
          header="Projects" />
      </div>
    );
  }
}

export default Projects;
