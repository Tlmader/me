import React, { Component } from "react";
import { Grid, Accordion, Panel } from 'react-bootstrap';
import JumbotronInstance from "../components/Jumbotron";

export default class Music extends Component {
  render() {
    return (
      <div className="home-page">
        <JumbotronInstance
          header="Music"
          description="Each year's favorite sounds!"/>
        <Grid>
          <Accordion>
            <Panel header="My 2016 – SoundCloud" eventKey="1" bsStyle="warning">
              <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/297172538&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            </Panel>
            <Panel header="My 2017 – SoundCloud" eventKey="2" bsStyle="warning">
              <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/288248586&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            </Panel>
            <Panel header="Sets & Mixes – SoundCloud" eventKey="3" bsStyle="warning">
              <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/116495333&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            </Panel>
            <Panel header="My 2016 – Spotify" eventKey="4" bsStyle="warning">
              <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Atlmader%3Aplaylist%3A3QGFzhkCFDhZhisEDYQvPW" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
            </Panel>
          </Accordion>
        </Grid>
      </div>
    );
  }
}
