import React from 'react'
import Draggable from 'react-draggable';
import LoginHeader from '../components/loginHeader'
import FriendsListNavbar from '../components/FriendsListNavbar'
import FriendsListLogo from '../components/FriendsListLogo'
import FriendsListBox from '../components/FriendsListBox'
import NewMessage from '../img/newMessage.png'
import GroupMessage from '../img/groupMessage.png'
import Search from '../img/search.png'


class FriendsList extends React.Component{



  render() {
   return (
     <Draggable
       handle=".handle"
       defaultPosition={{x: 1200, y: 100}}
       position={null}
       grid={[25, 25]}
       scale={1}
       onStart={this.handleStart}
       onDrag={this.handleDrag}
       onStop={this.handleStop}>
       <div className="instant-messenger">
         <div className="handle"><LoginHeader showHandler={this.props.showHandler} chatName="Friends List"/></div>
         <FriendsListNavbar/>
         <FriendsListLogo/>
         <FriendsListBox handleUserStatus={this.props.handleUserStatus} newChatHandler={this.props.newChatHandler}/>
         <img className="new-message-btn" alt="" src={NewMessage} height="15%" width="15%"/>
         <img className="group-message-btn" alt="" src={GroupMessage} height="15%" width="15%"/>
         <img className="search-btn"alt="" src={Search} height="15%" width="15%"/>
       </div>
     </Draggable>
   );
 }

}

export default FriendsList
