import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import TopBar from '../TopBar/TopBar';
import PokedexScreen from '../PokedexScreen/PokedexScreen';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <Grid fluid={true} className="pokedex">
        <TopBar />
        <PokedexScreen />
      </Grid>
    );
  }
}

export default Pokedex;
