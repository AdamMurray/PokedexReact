import React, { Component } from 'react';
import pokemonService from '../../../services/pokemonService';

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
      <div>
        <img src={this.state.pokemon.image} alt={this.state.pokemon.name} />
      </div>
    );
  }
}

export default Pokemon;