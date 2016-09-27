import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex/Pokedex';

class App extends Component {

  render() {

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function (registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function (err) {
        // registration failed
        console.log('ServiceWorker registration failed: ', err);
      });
    }

    return (
      <div>
        <Pokedex />
      </div>
    );
  }
}

export default App;
