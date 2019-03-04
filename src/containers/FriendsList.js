import React from 'react'
import Draggable from 'react-draggable';
import LoginHeader from '../components/loginHeader'
import FriendsListNavbar from '../components/FriendsListNavbar'
import FriendsListLogo from '../components/FriendsListLogo'


class FriendsList extends React.Component{
  render() {
   return (
     <Draggable
       handle=".handle"
       defaultPosition={{x: 100, y: 100}}
       position={null}
       grid={[25, 25]}
       scale={1}
       onStart={this.handleStart}
       onDrag={this.handleDrag}
       onStop={this.handleStop}>
       <div className="instant-messenger">
         <div className="handle"><LoginHeader chatName="Friends List"/></div>
         <FriendsListNavbar/>
         <FriendsListLogo/>

       </div>
     </Draggable>
   );
 }

}

export default FriendsList
