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
      currentPokemon: {
        name: '',
        image: ''
      }
    };

    this.loadPokemon = this.loadPokemon.bind(this);
  }

  loadPokemon(num) {
    pokemonService.getPokemonByNumber(num).then(data => {
      this.setState({
        currentPokemon: {
          name: data.name,
          image: data.sprites.front_default
        }
      });
    });
  }

  componentDidMount() {
    // -- load pokemon here
    this.loadPokemon(1);
  }

  render() {
    return (
      <Row className="PokedexScreen" style={screenStyle}>
        <Col xs={12} className="PokedexScreen-inner">
          <Row className="PokedexScreen-screen">
            <Col xs={12} className="PokedexScreen-screen-inner">
              <PokemonViewer pokemons={this.state.pokemons} />
              <Pokemon pokemon={this.state.currentPokemon} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PokedexScreen;