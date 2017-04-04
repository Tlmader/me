import React, { Component } from "react";
import { Grid, Accordion, Panel } from 'react-bootstrap';
import JumbotronInstance from "../components/Jumbotron";
import { playlists } from "../data/playlists";

export default class Music extends Component {
  render() {
    return (
      <div className="home-page">
        <JumbotronInstance
          header="Music"
          description="Each year's favorite sounds!"/>
        <Grid>
          <Accordion>
            {playlists.map((playlist, i) => (
              <Panel header={playlist.title} eventKey={i} key={i} bsStyle="warning">
                <div dangerouslySetInnerHTML={ {__html: playlist.content} } />
              </Panel>
            ))}
          </Accordion>
        </Grid>
      </div>
    );
  }
}
