import React, { Component } from "react";
import { Grid, Col, Panel, Image } from 'react-bootstrap';
import JumbotronInstance from "../components/Jumbotron";
import AboutPanel from "../components/AboutPanel";
import { abouts } from "../data/abouts";

export default class Home extends Component {
  render() {
    const header = (
      <h1>About Me</h1>
    );
    return (
      <div className="home-page">
        <JumbotronInstance
          header="Hello, world!"
          description="My name is Ted. I live in New Orleans and build software!"/>
        <Grid>
          <Col xs={12} md={4}>
            <Panel>
              <Image src="http://i.imgur.com/mnsLcG1.jpg" responsive />
            </Panel>
          </Col>
          <Col xs={12} md={8}>
            <Panel header={header} bsStyle="primary"> I study computer science and game development at the University of New Orleans and develop software for
              GE Digital. PC gaming, electronic music, and men's fashion are my hobbies, and I enjoy discovering places
              and learning new things.</Panel>
            {abouts.map((about, i) => (
              <AboutPanel about={about} key={i} />
            ))}
          </Col>
        </Grid>
      </div>
    );
  }
}
