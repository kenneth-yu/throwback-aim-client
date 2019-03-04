import React, { Component } from 'react';
import './App.css';
import './Chat.css';
import InstantMessengerChat from './containers/InstantMessengerChat'
import InstantMessenger from './containers/InstantMessenger'
import FriendsList from './containers/FriendsList'

class App extends Component {
  render() {
    return (
      <div>
      <FriendsList/>
      <InstantMessenger/>
      <InstantMessengerChat/>
      </div>
    )
  }
}

export default App;
