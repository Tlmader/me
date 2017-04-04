import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ProjectPanel extends Component {

  render() {
    const title = (
      <h1>{this.props.project.name}</h1>
    );
    return (
      <Panel header={title}>
        <p>{this.props.project.description}</p>
        <ListGroup>
          {this.props.project.links.map((link, j) => (
            <ListGroupItem href={link.to} key={j}>{link.label}</ListGroupItem>
          ))}
        </ListGroup>
      </Panel>
    );
  }
}