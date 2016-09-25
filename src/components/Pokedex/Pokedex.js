import React, { Component } from 'react';
import Pokemon from '../common/Pokemon/Pokemon';
import pokemonService from '../../services/pokemonService';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Pokedex.css';

class Pokedex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      offset: 0
    };

    this.loadMorePokemon = this.loadMorePokemon.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.loadPokemon(this.state.offset);
  }

  loadMorePokemon() {
    this.loadPokemon(this.state.offset);
  }

  loadPokemon(offset) {
    if (localStorage[`pokemons${offset}`]) {
      console.log('Get from LS...');
      this.setState({
        pokemons: this.state.pokemons.concat(JSON.parse(localStorage[`pokemons${offset}`])),
        offset: offset + 20
      });
    }
    else {
      console.log('Get from API...');
      pokemonService.getPokemon(offset).then(data => {
        this.setState({
          pokemons: this.state.pokemons.concat(data.results),
          offset: offset + 20
        });
        localStorage[`pokemons${offset}`] = JSON.stringify(data.results);
      });
    }
  }

  reset() {
    this.setState({
      pokemons: [],
      offset: 0
    });
  }

  render() {
    return (
      <Grid fluid={true} className="pokedex-screen">
        <Row>
          {this.state.pokemons.map((poke) => (
            <Col xs={6} sm={4} md={3} lg={2} className="no-padding" key={poke.name}>
              <Pokemon
                key={poke.name}
                name={poke.name}
                />
            </Col>
          )) }
        </Row>
        <Row>
          <Button onClick={this.loadMorePokemon} disabled={this.state.loading}>
            Load More
          </Button>
          <Button onClick={this.reset}>
            Reset
          </Button>
        </Row>
      </Grid>
    );
  }
}

export default Pokedex;
