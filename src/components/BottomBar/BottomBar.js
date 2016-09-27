import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './BottomBar.css';

class BottomBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
  }

  handleSearch(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  searchPokemon() {
    this.setState({
      searchValue: ''
    });
    this.props.searchPokemon(this.state.searchValue);
  }

  render() {
    return (
      <Row className="BottomBar">
        {/* <Col xs={5} className="BottomBar-input">
          <input
            value={this.state.searchValue}
            placeholder="#"
            onChange={this.handleSearch}
            type="number"
          />
          <Button onClick={this.searchPokemon}>{'GO'}</Button>
        </Col> */}
        <Col xs={7} className="BottomBar-buttons">
          <Button onClick={this.props.goToStart}>{'<<'}</Button>
          <Button onClick={this.props.decrement}>{'<'}</Button>
          <Button onClick={this.props.increment}>{'>'}</Button>
          <Button onClick={this.props.goToEnd}>{'>>'}</Button>
        </Col>
      </Row>
    );
  }
}

export default BottomBar;