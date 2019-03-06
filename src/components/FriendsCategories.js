import React from 'react'
import Friends from './Friends'

class FriendsCategories extends React.Component{
  state = {
    hidden: false
  }

  hideHandler = (event) => {
    if (event.target.className==="friends"){
      this.setState({
        hidden: !this.state.hidden
      })
    }
  }


  render(){

    let friendsList = this.props.category.friends.map(oneFriend => <Friends key={oneFriend.id} newChatHandler={this.props.newChatHandler} friend={oneFriend}/>)


    return(
      <li onClick={this.hideHandler}>
        <b className="friends">{this.props.category.name} ({(this.props.category.friends.filter(friend => friend.logged_in)).length}/{this.props.category.friends.length})</b>
        {this.state.hidden ? null : <ul>{friendsList}</ul>}
      </li>
    )
  }
}

export default FriendsCategories
