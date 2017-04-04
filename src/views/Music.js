import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import JumbotronInstance from "../components/Jumbotron";

export default class Music extends Component {
  render() {
    return (
      <div className="home-page">
        <JumbotronInstance
          header="Music"
          description="Each year's favorite sounds!"/>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297172538&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            </Col>
            <Col xs={12} md={3}>
              <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/288248586&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            </Col>
            <Col xs={12} md={3}>
              <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/116495333&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            </Col>
            <Col xs={12} md={3}>
              <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Atlmader%3Aplaylist%3A3QGFzhkCFDhZhisEDYQvPW" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
