import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants';

import FriendsCategories from './FriendsCategories'

class FriendsListBox extends React.Component{
  state = {
    categories: [{name: "Buddies", friends:[{name: "SmarterChild"},{name:"DumberChild"}]}, {name: "BuddyBois", friends:[{name:"Jerold"}]}, {name: "srsly", friends:[{name:"HalpPlsWork"}]}],
    users: []
  }

  handleUserStatus = (response) => {
    console.log("handleUserStatus called")
    const { type } = response
    switch(type) {
      case "DC_USER":
        let currentUsers = [...this.state.users];
        let currentUser = currentUsers.find(u => u.id === response.user);
        if (currentUser) {
          currentUser.logged_in = false
          this.setState({ users: currentUsers })
        }
        break;
      case "CO_USER":
        let currentUsers2 = [...this.state.users];
        let currentUser2 = currentUsers2.find(u => u.id === response.user);
        if(currentUser2){
          currentUser2.logged_in = true
          this.setState({ users: currentUsers2})
        }
        break;
      default:
        return null;
    }
  }


  render(){
    let categoriesList = this.state.categories.map(oneCategory => <FriendsCategories key={oneCategory.name} newChatHandler={this.props.newChatHandler} category={oneCategory}/>)
    console.log(this.state)
    return(
      <div className="friends-list-box">
      <ActionCableConsumer
          channel={{ channel: 'PresenceChannel' }}
          onReceived={(response) => this.handleUserStatus(response)}
        />
        <ul className="categories">
          {categoriesList}
        </ul>
      </div>
    )
  }
}

export default FriendsListBox
