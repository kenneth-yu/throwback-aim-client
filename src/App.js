import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './App.css';
import './Chat.css';
import InstantMessengerChat from './containers/InstantMessengerChat'
import InstantMessenger from './containers/InstantMessenger'
import FriendsList from './containers/FriendsList'
import { API_ROOT, HEADERS } from './constants'

class App extends Component {
  state = {
    showInstantMessenger: true,
    showFriendsList: false,
    showInstantMessengerChat: false,
    clickedFriend:{},
    user: {}
  }

  componentDidMount = () => {
    let token = localStorage.token;
    fetch(`${API_ROOT}get_user`, {
      method: `GET`,
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorzation: `${token}`
      }
    })
    .then(res => res.json())
    .then(user => {
      if (user.error){
        return <Redirect to="/" />;
      } else {
        this.setState({ user })
      }
    })
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
    this.setState({
      showInstantMessengerChat: !this.state.showInstantMessengerChat,
      clickedFriend: friendObj
    })
  }

  signupHandler = userInfo => {
  fetch(`${API_ROOT}users`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ user: userInfo })
  })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt);
      this.setState({ user: data.user });
    });
};

authenticateUser = (e, username, password) => {
  e.preventDefault();
  let user = {username: username, password: password}
  fetch(`${API_ROOT}login`, {
    method: `POST`,
    headers: HEADERS,
    body: JSON.stringify({ user })
  })
  .then(resp => resp.json())
  .then(data => {
    localStorage.setItem("token", data.jwt);
    this.setState({ user: data.user })
  })
  console.log(localStorage.token)
}

  render() {
    return (
      <div>
      {this.state.showInstantMessenger ?
      <InstantMessenger showHandler={this.showHandler} authenticateUser={this.authenticateUser}/> :
      <FriendsList newChatHandler={this.newChatHandler} showHandler={this.showHandler} />}
      {this.state.showInstantMessengerChat ? <InstantMessengerChat clickedFriend={this.state.clickedFriend} showHandler={this.showHandler}/> : null}
      </div>
    )
  }
}

export default App;
