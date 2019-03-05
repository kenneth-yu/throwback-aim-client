import React from 'react'
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constants'

import FriendsCategories from './FriendsCategories'

class FriendsListBox extends React.Component{
  state = {
    categories: [{name: "Buddies", friends:[{name: "SmarterChild"},{name:"DumberChild"}]}, {name: "BuddyBois", friends:[{name:"Jerold"}]}, {name: "srsly", friends:[{name:"HalpPlsWork"}]}]
  }

  getFriendsList = () =>{
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => this.setState({
      categories: data.categories,
    }))
  }

  render(){
    let categoriesList = this.state.categories.map(oneCategory => <FriendsCategories key={oneCategory.name} newChatHandler={this.props.newChatHandler} category={oneCategory}/>)
    console.log(this.state)
    return(
      <div className="friends-list-box">
        <ul>
          {categoriesList}
        </ul>
      </div>
    )
  }
}

export default FriendsListBox
