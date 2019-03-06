import React from 'react'

class Friends extends React.Component{
  render(){
    return(
      <li className="friends-li" onClick={() => this.props.newChatHandler(this.props.friend)}>{this.props.friend.username}</li>
    )
  }
}

export default Friends
