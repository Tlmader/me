import React, { Component } from "react";
import { Grid } from 'react-bootstrap';
import JumbotronInstance from "../components/Jumbotron";
import InfoPanel from "../components/InfoPanel";
import { projects } from "../data/projects";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-page">
        <JumbotronInstance
          header="Projects"
          description="Check out these fun things I've worked on!"/>
        <Grid>
          {projects.map((project, i) => (
            <InfoPanel project={project} />
          ))}
        </Grid>
      </div>
    );
  }
}
