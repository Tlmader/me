import React, { Component } from "react";
import { Grid } from 'react-bootstrap';
import JumbotronInstance from "../components/Jumbotron";
import ProjectPanel from "../components/ProjectPanel";
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
            <ProjectPanel project={project} key={i} />
          ))}
        </Grid>
      </div>
    );
  }
}
