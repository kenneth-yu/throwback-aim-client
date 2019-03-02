import React from 'react'
import LoginHeader from '../components/loginHeader'
import LoginLogo from '../components/loginLogo'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import InstantMessengerBottom from './InstantMessengerBottom'


class InstantMessenger extends React.Component{
  render(){
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{x: 1200, y:100}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="instant-messenger">
          <div className="handle"><LoginHeader chatName="Sign On"/></div>
            <LoginLogo/>
            <InstantMessengerBottom/>
        </div>
      </Draggable>
    );
  }

}

export default InstantMessenger
