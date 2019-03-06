import React from 'react'
import { ActionCable } from 'react-actioncable-provider';

import FriendsCategories from './FriendsCategories'

class FriendsListBox extends React.Component{
  state = {
    categories: [{name: "Buddies", friends:[{name: "SmarterChild"},{name:"DumberChild"}]}, {name: "BuddyBois", friends:[{name:"Jerold"}]}, {name: "srsly", friends:[{name:"HalpPlsWork"}]}]
  }


  render(){
    let categoriesList = this.state.categories.map(oneCategory => <FriendsCategories key={oneCategory.name} newChatHandler={this.props.newChatHandler} category={oneCategory}/>)
    console.log(this.state)
    return(
      <div className="friends-list-box">
      <ActionCable
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
