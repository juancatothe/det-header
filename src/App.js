import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo.js';
import Search from './Search.js';
import Menu from './Menu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo title="mikes button" type="primary"/>
          <Menu/>
          <Search/>
        </header>
      </div>
    );
  }
}

export default App;
