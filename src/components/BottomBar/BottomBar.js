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
    // this.props.searchPokemon(e.target.value);
  }

  searchPokemon() {
    this.props.searchPokemon(this.state.searchValue);
  }

  render() {
    return (
      <Row className="BottomBar">
        <Col xs={6} className="BottomBar-input">
          <Row>
            <Col xs={8}>
              <input
                value={this.state.searchValue}
                placeholder="Search by #"
                onChange={this.handleSearch}
              />
            </Col>
            <Col xs={4}>
              <Button onClick={this.searchPokemon}>{'GO'}</Button>
            </Col>
          </Row>
        </Col>
        <Col xs={6} className="BottomBar-buttons">
          <Button onClick={this.props.goToStart}>{'<<'}</Button>
          <Button onClick={this.props.decrement}>{'<'}</Button>
          <Button onClick={this.props.decrement}>{'>'}</Button>
          <Button onClick={this.props.goToEnd}>{'>>'}</Button>
        </Col>
      </Row>
    );
  }
}

export default BottomBar;