import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import JumbotronInstance from '../components/Jumbotron';

class Photos extends Component {
  render() {
    return (
      <div className="photos-page">
        <JumbotronInstance
          header="Photos" />
        <Grid>
          <Row>
            {images.map(image => (
              <Col xs={6} md={3}>
                <Thumbnail src={image.src} alt="Photo" />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

const images = [
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' },
  { src: 'https://react-bootstrap.github.io/assets/thumbnail.png' }
];

export default Photos;
