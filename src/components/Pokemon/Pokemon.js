import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    return (
      <Row className="Pokemon">
        <Col xs={12}>
          <img src={this.props.pokemon.image} alt={this.props.pokemon.name} />
        </Col>
      </Row>
    );
  }
}

export default Pokemon;