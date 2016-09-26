import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import TopBar from '../TopBar/TopBar';
import PokedexScreen from '../PokedexScreen/PokedexScreen';
import BottomBar from '../BottomBar/BottomBar';

class Pokedex extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <TopBar />
        <PokedexScreen />
        <BottomBar />
      </Grid>
    );
  }
}

export default Pokedex;
