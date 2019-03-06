import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from "../constants"

import FriendsCategories from './FriendsCategories'

class FriendsListBox extends React.Component{
  state = {
    categories: [{name: "Buddies", friends:[{username: "SmarterChild"},{username:"DumberChild"}]}, {name: "BuddyBois", friends:[{username:"Jerold"}]}, {name: "srsly", friends:[{username:"HalpPlsWork"}]}],
  }

  componentDidMount(){
    let updatedCategories = [...this.state.categories];
    fetch(`${API_ROOT}users`, {
      method: `GET`,
      headers: HEADERS
    })
    .then(res => res.json())
    .then(users => {
      updatedCategories[0].friends = users;
      this.setState({ categories: updatedCategories })
    })
  }


  render(){
    let categoriesList = this.state.categories.map(oneCategory => <FriendsCategories key={oneCategory.name} newChatHandler={this.props.newChatHandler} category={oneCategory}/>)
    return(
      <div className="friends-list-box">
      <ActionCableConsumer
          channel={{ channel: 'PresenceChannel' }}
          onReceived={(response) => this.props.handleUserStatus(response)}
        />
        <ul className="categories">
          {categoriesList}
        </ul>
      </div>
    )
  }
}

export default FriendsListBox
