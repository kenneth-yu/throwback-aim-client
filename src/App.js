import React, { Component } from 'react';
import './App.css';
import './Chat.css';
import InstantMessengerChat from './containers/InstantMessengerChat'
import InstantMessenger from './containers/InstantMessenger'

class App extends Component {
  render() {
    return (
      <div>
      <InstantMessenger/>
      <InstantMessengerChat/>
      </div>
    )
  }
}

export default App;
