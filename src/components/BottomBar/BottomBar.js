import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './BottomBar.css';

class BottomBar extends Component {
  render() {
    return (
      <Row className="BottomBar">
        <Col xs={12}>
          Bottom Bar
        </Col>
      </Row>
    );
  }
}

export default BottomBar;