import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

export default class JumbotronInstance extends Component {
  render() {
    return (
      <Jumbotron>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <main>
                <h1>{this.props.header}</h1>
                <p>{this.props.description}</p>
              </main>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
}
