import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import JumbotronInstance from '../components/Jumbotron';

const photos = [
  { thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { thumbnail: 'https://react-bootstrap.github.io/assets/thumbnail.png' }
];

export default class Photos extends Component {
  render() {
    return (
      <div className="photos-page">
        <JumbotronInstance
          header="Photos" />
        <Grid>
          <Row>
            {photos.map((photo, i) => (
              <Col xs={6} md={3} key={i}>
                <Thumbnail src={photo.thumbnail} alt="Thumbnail" />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}
