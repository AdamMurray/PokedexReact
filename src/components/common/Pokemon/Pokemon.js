import React, { Component } from 'react';
import pokemonService from '../../../services/pokemonService';
import './Pokemon.css';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        name: '',
        image: ''
      }
    };
  }

  componentDidMount() {
    pokemonService.getPokemonByName(this.props.name).then(data => {
      this.setState({
        pokemon: {
          name: data.name,
          image: data.sprites.front_default
        }
      });
    });
  }

  render() {
    return (
      <div className="pokemon">
        <img
          className="pokemon__image"
          src={this.state.pokemon.image}
          alt={this.state.pokemon.name}
        />
      </div>
    );
  }
}

export default Pokemon;