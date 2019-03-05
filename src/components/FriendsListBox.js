import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants';

import FriendsCategories from './FriendsCategories'

class FriendsListBox extends React.Component{
  state = {
    categories: [{name: "Buddies", friends:[{name: "SmarterChild"},{name:"DumberChild"}]}, {name: "BuddyBois", friends:[{name:"Jerold"}]}, {name: "srsly", friends:[{name:"HalpPlsWork"}]}],
    users: []
  }

  getFriendsList = () =>{
    fetch(`${API_ROOT}users`, {
      method: `GET`,
      headers: HEADERS
    })
    .then(res => res.json())
    .then(data => this.setState({
      categories: data.categories,
    }))
  }

  handleReceivedUsers = response => {
    const { userlist } = response;
    this.setState({
      users: [...this.state.users, userlist]
    });
  };



  render(){
    let categoriesList = this.state.categories.map(oneCategory => <FriendsCategories key={oneCategory.name} newChatHandler={this.props.newChatHandler} category={oneCategory}/>)
    console.log(this.state)
    return(
      <div className="friends-list-box">
      <ActionCableConsumer
          channel={{ channel: 'UsersChannel' }}
          onReceived={this.handleReceivedUsers}
        />
        <ul className="categories">
          {categoriesList}
        </ul>
      </div>
    )
  }
}

export default FriendsListBox
