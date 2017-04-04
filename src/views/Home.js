import React, { Component } from "react";
import { Grid, Col, Panel } from 'react-bootstrap';
import JumbotronInstance from "../components/Jumbotron";

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <JumbotronInstance
          header="Hello, world!"
          description="My name is Ted. I live in New Orleans and build software!"/>
        <Grid>
          <Panel header="About Me" bsStyle="primary"> I study computer science and game development at the University of New Orleans and develop software for
            GE Digital. PC gaming, electronic music, and men's fashion are my hobbies, and I enjoy discovering places
            and learning new things.</Panel>
        </Grid>
      </div>
    );
  }
}
