import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Pokemon.css';
import pokemonService from '../../services/pokemonService';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        id: '0',
        name: '......',
        sprites: {
          front_default: '',
          back_default: ''
        }
      },
      primaryPokemonType: null
    };

    this.padLeft = this.padLeft.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
  }

  getPokemon() {
    pokemonService.getPokemonByNumber(this.props.pokemonNumber).then(data => {
      var primaryType = data.types.filter((t) => {
        return t.slot === 1;
      });

      console.log('Primary type:', primaryType);

      this.setState({
        pokemon: data,
        primaryPokemonType: primaryType[0].type.name
      });
      console.log('Pokemon:', data);
    });
  }

  componentWillReceiveProps() {
    this.getPokemon();
  }

  componentDidMount() {
    this.getPokemon();
  }

  padLeft(num) {
    var str = "" + num;
    var pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
  }

  render() {

    var nameRowStyle = {
      position: 'fixed',
      zIndex: '1000'
    };

    // -- TODO: set box-shadow colour based on Pokemon type
    var nameStyle = {
      fontSize: '1.6em',
      textTransform: 'uppercase',
      color: 'white',
      background: 'black',
      boxShadow: '4px 4px 0 1px #aaa'
    };

    var imageStyle = {
      textAlign: 'center'
    };

    if (this.state.pokemon) {
      var frontImage = <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name} />;
      var backImage = <img src={this.state.pokemon.sprites.back_default} alt={this.state.pokemon.name} />;
      var name = <div>{this.state.pokemon.name} #{this.padLeft(this.state.pokemon.id)}</div>
    }

    if (this.state.primaryPokemonType) {
      const baseBoxShadow = '4px 4px 0 1px';
      var boxShadowColour = null;

      switch (this.state.primaryPokemonType) {
        case 'water':
          boxShadowColour = '#28aafd';
          break;
        case 'grass':
          boxShadowColour = 'rgb(155, 205, 61)';
          break;
        case 'fire':
          boxShadowColour = 'rgb(241, 133, 41)';
          break;
        default:
          boxShadowColour = '#aaa';
          break;
      }

      nameStyle.boxShadow = `${baseBoxShadow} ${boxShadowColour}`;
    }

    return (
      <Row className="Pokemon">
        <Col xs={12}>
          <Row style={nameRowStyle}>
            <Col xs={12} style={nameStyle}>
              {name}
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={imageStyle} className="Pokemon-image">
              {frontImage}
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={imageStyle} className="Pokemon-image">
              {backImage}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Pokemon;