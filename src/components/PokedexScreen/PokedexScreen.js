import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './PokedexScreen.css';
import PokemonViewer from '../PokemonViewer/PokemonViewer';
import Pokemon from '../Pokemon/Pokemon';
import BottomBar from '../BottomBar/BottomBar';
import pokemonService from '../../services/pokemonService';

class PokedexScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      viewerPokemons: [],
      currentPokemonNumber: localStorage['currentPokemon'] ? localStorage['currentPokemon'] : 1
    };

    this.incrementCurrentPokemon = this.incrementCurrentPokemon.bind(this);
    this.decrementCurrentPokemon = this.decrementCurrentPokemon.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
    this.isInt = this.isInt.bind(this);
    this.goToStart = this.goToStart.bind(this);
    this.goToEnd = this.goToEnd.bind(this);
  }

  incrementCurrentPokemon() {
    this.setState({
      currentPokemonNumber: parseInt(this.state.currentPokemonNumber) + 1
    });
  }

  decrementCurrentPokemon() {
    this.setState({
      currentPokemonNumber: parseInt(this.state.currentPokemonNumber) - 1
    });
  }

  goToStart() {
    console.log('Go to start');
    this.setState({
      currentPokemonNumber: 1
    });
  }

  goToEnd() {
    console.log('Go to end');
    this.setState({
      currentPokemonNumber: 649
    });
  }

  isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }

  searchPokemon(searchString) {
    console.log('Search for:', searchString);
    if (this.isInt(parseInt(searchString))) {
      console.log('Search number');
      this.setState({
        currentPokemonNumber: parseInt(searchString)
      });
    }
  }

  componentDidMount() {
    // -- load pokemon here
    // this.loadPokemon();
  }

  render() {
    // The screen height is the height of the window minus the TopBar height
    const screenHeight = window.innerHeight - 80 - 80;
    const screenStyle = {
      height: screenHeight
    };

    return (
      <div>
        <Row className="PokedexScreen" style={screenStyle}>
          <Col xs={12} className="PokedexScreen-inner">
            <Row className="PokedexScreen-screen">
              <Col xs={12} className="PokedexScreen-screen-inner">
                {/* <PokemonViewer pokemons={this.state.viewerPokemons} /> */}
                <Pokemon pokemonNumber={this.state.currentPokemonNumber} />
              </Col>
            </Row>
          </Col>
        </Row>
        <BottomBar
          increment={this.incrementCurrentPokemon}
          decrement={this.decrementCurrentPokemon}
          goToStart={this.goToStart}
          goToEnd={this.goToEnd}
          searchPokemon={this.searchPokemon}
          />
      </div>
    );
  }
}

export default PokedexScreen;