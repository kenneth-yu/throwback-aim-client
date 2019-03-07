import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from "../constants"

import FriendsCategories from './FriendsCategories'

class FriendsListBox extends React.Component{
  state = {
    categories: [{name: "Buddies", friends:[{username: "SmarterChild"},{username:"DumberChild"}]}, {name: "BuddyBois", friends:[{username:"Jerold"}]}, {name: "srsly", friends:[{username:"HalpPlsWork"}]}],
    onlineFriends:[],
    offlineFriends:[]
  }

  componentDidMount(){
    let updatedCategories = [...this.state.categories];
    fetch(`${API_ROOT}users`, {
      method: `GET`,
      headers: HEADERS
    })
    .then(res => res.json())
    .then(users => {
      console.log(users)
      updatedCategories[0].friends = users;
      let onlineUsers = []
      let offlineUsers = []
      users.forEach(oneUser =>{
        if (oneUser.logged_in === true){
          onlineUsers = [...onlineUsers, oneUser]
        }
        else{
          offlineUsers = [...offlineUsers, oneUser]
        }
      })
      this.setState({
        categories: updatedCategories,
        onlineFriends: [{name: "Buddies", friends: onlineUsers}],
        offlineFriends: [{name: "Offline", friends: offlineUsers}]
      })
    })
  }


  render(){
    let onlineList = this.state.onlineFriends.map(oneCategory => <FriendsCategories key={oneCategory.name} newChatHandler={this.props.newChatHandler} friendslistcount={this.state.categories[0].friends.length} count={this.state.onlineFriends.length} category={oneCategory}
    online="true"/>)
    let offlineList= this.state.offlineFriends.map(oneCategory => <FriendsCategories key={oneCategory.name} newChatHandler={this.props.newChatHandler} friendslistcount={this.state.categories[0].friends.length} count ={this.state.offlineFriends.length} category={oneCategory} online="false"/>)
    return(
      <div className="friends-list-box">
      <ActionCableConsumer
          channel={{ channel: 'PresenceChannel' }}
          onReceived={(response) => this.props.handleUserStatus(response)}
        />
        <ul className="categories">
          {onlineList}
          {offlineList}
        </ul>
      </div>
    )
  }
}

export default FriendsListBox
