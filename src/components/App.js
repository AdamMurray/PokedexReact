import React, { Component } from 'react';
import './App.css';
import Navbar from './common/Navbar/Navbar';
import Pokedex from './Pokedex/Pokedex';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Pokedex />
      </div>
    );
  }
}

export default App;
