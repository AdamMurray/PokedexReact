import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './PokedexScreen.css';
import PokemonViewer from '../PokemonViewer/PokemonViewer';
import Pokemon from '../Pokemon/Pokemon';
import pokemonService from '../../services/pokemonService';

// The screen height is the height of the window minus the TopBar height
const screenHeight = window.innerHeight - 80 - 80;
const screenStyle = {
  height: screenHeight
};

class PokedexScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      currentPokemonNumber: 6
    };

    this.loadPokemon = this.loadPokemon.bind(this);
  }

  loadPokemon() {
    pokemonService.getPokemon().then(data => {
      this.setState({
        pokemons: data.results
      });
      console.log('Pokemons:', data.results);
    });
  }

  componentDidMount() {
    // -- load pokemon here
    this.loadPokemon();
  }

  render() {
    return (
      <Row className="PokedexScreen" style={screenStyle}>
        <Col xs={12} className="PokedexScreen-inner">
          <Row className="PokedexScreen-screen">
            <Col xs={12} className="PokedexScreen-screen-inner">
              <PokemonViewer pokemons={this.state.pokemons} />
              <Pokemon pokemonNumber={this.state.currentPokemonNumber} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PokedexScreen;