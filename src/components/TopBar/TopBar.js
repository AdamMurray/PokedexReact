import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './TopBar.css';

class TopBar extends Component {
  render() {
    return (
      <Row className="TopBar">
        <Col xs={12}>
          <div className="TopBar-lens">
            <div className="TopBar-lens-inner"></div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default TopBar;