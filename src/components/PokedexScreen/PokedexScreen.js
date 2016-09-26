import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './PokedexScreen.css';
import PokemonViewer from '../PokemonViewer/PokemonViewer';
import Pokemon from '../Pokemon/Pokemon';

// The screen height is the height of the window minus the TopBar height
const screenHeight = window.innerHeight - 80 - 80;
const screenStyle = {
  height: screenHeight
};

class PokedexScreen extends Component {
  render() {
    return (
      <Row className="PokedexScreen" style={screenStyle}>
        <Col xs={12} className="PokedexScreen-inner">
          <Row className="PokedexScreen-screen">
            <Col xs={12} className="PokedexScreen-screen-inner">
              <PokemonViewer />
              <Pokemon />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PokedexScreen;