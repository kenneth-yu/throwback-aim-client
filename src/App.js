import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './App.css';
import './Chat.css';
import InstantMessengerChat from './containers/InstantMessengerChat'
import InstantMessenger from './containers/InstantMessenger'
import FriendsList from './containers/FriendsList'
import { API_ROOT, HEADERS } from './constants'
import CreateUser from './containers/CreateUser'
import { Route, Switch } from "react-router-dom";


class App extends Component {
  state = {
    showInstantMessenger: true,
    showFriendsList: false,
    showInstantMessengerChat: false,
    clickedFriend:{},
    user: {},
    users: [],
    conversations: []
  }

  componentDidMount() {
  }

  getCurrentUser = () => {
    fetch(`${API_ROOT}get_user`, {
      method: `GET`,
      headers: HEADERS
    })
    .then(res => res.json())
    .then(user => {
      if (user.error){
        return <Redirect to="/" />;
      } else {
        this.getUserConversations()
      }
    })
  }

  getUserConversations = () => {
    fetch(`${API_ROOT}user_conversations`, {
      method: `GET`,
      headers: HEADERS
    })
    .then(res => res.json())
    .then(convos => {
      let userConvos = !!convos && convos.filter(convo => convo.user_id === this.state.user.id)
      this.setState({ conversations: userConvos })
    })
  }


  showHandler = (chatName) =>{
    if(chatName === "Friends List") {
      this.setState({
        showFriendsList: false,
        showInstantMessenger: true
      })
    }
    else if (chatName === "Sign On"){
      return null
    }
    else{
      this.setState({
        showInstantMessengerChat: !this.state.showInstantMessengerChat
      })
    }
  }

  newChatHandler = (friendObj) =>{
    if(friendObj.logged_in){
      this.showHandler()
      this.setState({
        clickedFriend: friendObj,
        showInstantMessengerChat: !this.state.showInstantMessengerChat
      })
    }
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
    console.log(data)
    localStorage.setItem("token", data.jwt);
    this.setState({
      user: data.user ,
      showFriendsList: !this.state.showFriendsList,
      showInstantMessenger: !this.state.showInstantMessenger
    }, this.getCurrentUser());
    document.cookie = 'X-Authorization=' + data.jwt + '; path=/';
  })
}


  render() {
    console.log("this.state.user.id", this.state.user.id)
    return (
      <div>
      <Switch>
        <Route path="/signup" component={CreateUser} />
      </Switch>
      {this.state.showInstantMessenger ?
      <InstantMessenger user_id={this.state.user.id}  showHandler={this.showHandler} authenticateUser={this.authenticateUser}/> :
      <FriendsList newChatHandler={this.newChatHandler} showHandler={this.showHandler} />}
      {this.state.showInstantMessengerChat ? <InstantMessengerChat user_id={this.state.user.id} user={this.state.user} conversations={this.state.conversations} clickedFriend={this.state.clickedFriend} showHandler={this.showHandler}/> : null}
      </div>
    )
  }
}

export default App;
