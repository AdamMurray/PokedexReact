import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './PokedexScreen.css';

class PokedexScreen extends Component {
  render() {
    return (
      <Row className="PokedexScreen">
        <Col xs={12} className="PokedexScreen-inner">
          <Row className="PokedexScreen-screen">
            <Col xs={12}>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PokedexScreen;