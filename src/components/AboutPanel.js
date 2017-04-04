import React, { Component } from 'react';
import { Panel, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class AboutPanel extends Component {

  render() {
    const header = (
      <h1>{this.props.about.title}</h1>
    );
    const footer = (
      <a href={this.props.about.linkTo}>{this.props.about.linkLabel}</a>
    );
    return (
      <Panel header={header} footer={footer} bsStyle="primary">
        <Row>
          {this.props.about.content}
        </Row>
      </Panel>
    );
  }
}
