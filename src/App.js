import React, { Component } from 'react';
import './App.css';
import './Chat.css';
import InstantMessengerChat from './containers/InstantMessengerChat'
import InstantMessenger from './containers/InstantMessenger'
import FriendsList from './containers/FriendsList'

class App extends Component {
  state = {
    showFriendsList: false,
    showInstantMessenger: true,
    showInstantMessengerChat: true
  }

  showHandler = (chatName) =>{
    if(chatName === "Friends List" || chatName === "Sign On") {
      this.setState({
        showFriendsList: !this.state.showFriendsList,
        showInstantMessenger: !this.state.showInstantMessenger
      })
    }
    else {
      this.setState({
        showInstantMessengerChat: !this.state.showInstantMessengerChat
      })
    }
  }

  render() {
    return (
      <div>
      {this.state.showInstantMessenger ? <InstantMessenger showHandler={this.showHandler}/> : <FriendsList showHandler={this.showHandler} />}
      {this.state.showInstantMessengerChat ? <InstantMessengerChat showHandler={this.showHandler}/> : null}
      </div>
    )
  }
}

export default App;
