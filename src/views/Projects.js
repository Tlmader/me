import React, { Component } from "react";
import { Grid } from 'react-bootstrap';
import JumbotronInstance from "../components/Jumbotron";
import ProjectPanel from "../components/ProjectPanel";

const projects = [
  {
    name: 'Chess Bot',
    description: 'This project provides a model of the state space of chess and a simple chess-playing bot that ' +
    'explores that space efficiently and decides what moves to make to defeat other bots. This uses a chess ' +
    'framework and tests against bots by Stephen G. Ware.',
    links: [
      {
        label: 'Source',
        to: 'https://github.com/Tlmader/chess-bot'
      }
    ]
  },
  {
    name: 'Honest Abe',
    description: 'A group project by the UNO Advanced Game Development class of Spring 2016: a 2D beat \'em up built ' +
    'with Unity!',
    links: [
      {
        label: 'Windows desktop 64-bit',
        to: 'https://build.cloud.unity3d.com/share/ZkMWaNQDf-/'
      },
      {
        label: 'Mac desktop 64-bit',
        to: 'https://build.cloud.unity3d.com/share/ZkMWaNQDf-/'
      },
      {
        label: 'Source',
        to: 'https://github.com/Tlmader/honest-abe'
      }
    ]
  },
  {
    name: 'Theodoric',
    description: 'A 2D top-down action RPG built with the Phaser HTML5 game framework.',
    links: [
      {
        label: 'Play in browser!',
        to: 'http://tlmader.github.io/#/theodoric'
      },
      {
        label: 'Download',
        to: 'https://spaces.hightail.com/space/GGXk0'
      },
      {
        label: 'Source',
        to: 'https://github.com/Tlmader/theodoric'
      }
    ]
  },
  {
    name: 'Glyphic Heroes',
    description: 'A competitive match 3 game built with the Unity. Players must line up glyphs to attack opponents' +
    'and defend themselves.',
    links: [
      {
        label: 'Download',
        to: 'https://spaces.hightail.com/space/FIXaH'
      },
      {
        label: 'Source',
        to: 'https://github.com/Tlmader/glyphic-heroes'
      }
    ]
  },
  {
    name: 'Endless Runner',
    description: 'An endless runner game built with Unreal Engine 4.',
    links: [
      {
        label: 'Download',
        to: 'https://spaces.hightail.com/space/eaQmn'
      },
      {
        label: 'Source',
        to: 'https://github.com/Tlmader/endless-runner'
      }
    ]
  },
];

class Projects extends Component {
  render() {
    return (
      <div className="projects-page">
        <JumbotronInstance
          header="Projects"/>
        <Grid>
          {projects.map((project, i) => (
            <ProjectPanel project={project}/>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Projects;
