import React, { Component } from 'react';
import pokemonLogo from '../../../assets/images/pokemon-logo.png';

const navbarStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  width: '100%',
  backgroundColor: '#ff1c1c',
  padding: '5px 10px'
};

const logoStyles = {
  height: '40px'
};

class Navbar extends Component {
  render() {
    return (
      <div style={navbarStyles}>
        <img src={pokemonLogo} style={logoStyles} alt="test" />
      </div>
    );
  }
}

export default Navbar;