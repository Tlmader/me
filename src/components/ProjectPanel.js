import React, { Component } from 'react';
import { Panel, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ProjectPanel extends Component {

  render() {
    const title = (
      <h1>{this.props.project.name}</h1>
    );
    return (
      <Panel header={title} bsStyle="primary">
        <Row>
          <Col md={3}>
            <ListGroup>
              {this.props.project.links.map((link, j) => (
                <ListGroupItem href={link.to} key={j}>{link.label}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md={9}>
            <p>{this.props.project.description}</p>
          </Col>
        </Row>
      </Panel>
    );
  }
}
