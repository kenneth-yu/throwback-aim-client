import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Chat.css';
import InstantMessenger from './containers/InstantMessenger'

class App extends Component {
  render() {
    return (
      <div>
      <InstantMessenger />
      </div>
    )
  }
}

export default App;
