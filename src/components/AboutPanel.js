import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class AboutPanel extends Component {

  render() {
    const header = (
      <h1>{this.props.about.title}</h1>
    );
    const footer = (
      <a href={this.props.about.linkTo}>{this.props.about.linkLabel}</a>
    );
    return (
      <Panel header={header} footer={footer} bsStyle="info">
        {this.props.about.content}
      </Panel>
    );
  }
}
