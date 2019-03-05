import React, { Component } from 'react';
import './App.css';
import './Chat.css';
import InstantMessengerChat from './containers/InstantMessengerChat'
import InstantMessenger from './containers/InstantMessenger'
import FriendsList from './containers/FriendsList'

class App extends Component {
  state = {
    showInstantMessenger: true,
    showFriendsList: false,
    showInstantMessengerChat: false,
    clickedFriend:{}
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

  newChatHandler = (friendObj) =>{
    this.showHandler()
    this.setState({
      clickedFriend: friendObj,
      showInstantMessengerChat: !this.state.showInstantMessengerChat
    })
  }


  render() {
    return (
      <div>
      {this.state.showInstantMessenger ?
      <InstantMessenger showHandler={this.showHandler}/> :
      <FriendsList newChatHandler={this.newChatHandler} showHandler={this.showHandler} />}
      {this.state.showInstantMessengerChat ? <InstantMessengerChat clickedFriend={this.state.clickedFriend} showHandler={this.showHandler}/> : null}
      </div>
    )
  }
}

export default App;
