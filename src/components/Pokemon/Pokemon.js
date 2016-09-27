import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Pokemon.css';
import pokemonService from '../../services/pokemonService';
import pokemonConfig from '../../config/pokemonConfig';

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
    this.getPrimaryTypeColour = this.getPrimaryTypeColour.bind(this);
  }

  getPokemon(num) {
    num = num || 1;
    pokemonService.getPokemonByNumber(num).then(data => {
      var primaryType = data.types.filter((t) => {
        return t.slot === 1;
      });

      this.setState({
        pokemon: data,
        primaryPokemonType: primaryType[0].type.name
      });
      localStorage['currentPokemon'] = num;
      console.log('Pokemon:', data);
    });
  }

  componentWillReceiveProps() {
    this.setState({
      pokemon: {
        id: '0',
        name: 'Loading...',
        sprites: {
          front_default: '',
          back_default: ''
        }
      }
    });
    this.getPokemon(this.props.pokemonNumber);
  }

  componentDidMount() {
    var num = localStorage['currentPokemon'] || this.props.pokemonNumber;
    this.getPokemon(num);
  }

  padLeft(num) {
    var str = "" + num;
    var pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
  }

  getPrimaryTypeColour(primaryType) {
    return pokemonConfig.typeColours[primaryType];
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
      var name = <div>{this.state.pokemon.name} #{this.padLeft(this.state.pokemon.id) }</div>
    }

    if (this.state.primaryPokemonType) {
      const baseBoxShadow = '4px 4px 0 1px';
      var boxShadowColour = this.getPrimaryTypeColour(this.state.primaryPokemonType);
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