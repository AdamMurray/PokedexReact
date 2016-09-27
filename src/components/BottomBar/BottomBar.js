import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './BottomBar.css';

class BottomBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="BottomBar">
        <Col xs={12}>
          <Button onClick={this.props.decrement}>{'<<'}</Button>
          <Button onClick={this.props.increment}>{'>>'}</Button>
        </Col>
      </Row>
    );
  }
}

export default BottomBar;