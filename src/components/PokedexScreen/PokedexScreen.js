import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './PokedexScreen.css';
import PokemonViewer from '../PokemonViewer/PokemonViewer';
import Pokemon from '../Pokemon/Pokemon';
import BottomBar from '../BottomBar/BottomBar';
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
      viewerPokemons: [],
      currentPokemonNumber: 1
    };

    this.loadPokemon = this.loadPokemon.bind(this);
    this.incrementCurrentPokemon = this.incrementCurrentPokemon.bind(this);
    this.decrementCurrentPokemon = this.decrementCurrentPokemon.bind(this);
  }

  loadPokemon() {
    pokemonService.getPokemon().then(data => {
      this.setState({
        pokemons: data.results,
        viewerPokemons: data.results.slice(this.state.currentPokemonNumber - 2, this.state.currentPokemonNumber + 1)
      });
      console.log('Pokemons:', data.results);
    });
  }

  incrementCurrentPokemon() {
    this.setState({
      currentPokemonNumber: this.state.currentPokemonNumber + 1
    });
  }

  decrementCurrentPokemon() {
    this.setState({
      currentPokemonNumber: this.state.currentPokemonNumber - 1
    });
  }

  componentDidMount() {
    // -- load pokemon here
    this.loadPokemon();
  }

  render() {
    return (
      <div>
        <Row className="PokedexScreen" style={screenStyle}>
          <Col xs={12} className="PokedexScreen-inner">
            <Row className="PokedexScreen-screen">
              <Col xs={12} className="PokedexScreen-screen-inner">
                <PokemonViewer pokemons={this.state.viewerPokemons} />
                <Pokemon pokemonNumber={this.state.currentPokemonNumber} />
              </Col>
            </Row>
          </Col>
        </Row>
        <BottomBar
          increment={this.incrementCurrentPokemon}
          decrement={this.decrementCurrentPokemon}
        />
      </div>
    );
  }
}

export default PokedexScreen;