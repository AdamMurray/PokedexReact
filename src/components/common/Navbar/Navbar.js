import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="navbar__lens">
          <div className="navbar__lens__inner"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;