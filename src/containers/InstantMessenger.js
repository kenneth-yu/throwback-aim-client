import React from 'react'
import LoginHeader from '../components/loginHeader'
import LoginLogo from '../components/loginLogo'
import Draggable from 'react-draggable';
import InstantMessengerBottom from './InstantMessengerBottom'


class InstantMessenger extends React.Component{
  state ={
    username: "",
    password: ""
  }

  authenticateUser = (e, val) => {
    e.preventDefault();
    //Authenticate User Login Here
    console.log("authentication not set up")
    console.log("username", this.state.username)
    console.log("password", this.state.password)
  };

  handleChange = (event) => {
    // console.log(event.target)
    if(event.target.name ==="screenname"){
      this.setState({
        username: event.target.value
      });
    }
    else if(event.target.name ==="password"){
      this.setState({
        password: event.target.value
      })
    }
  };

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
            <InstantMessengerBottom authenticateUser={this.authenticateUser}
            onChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}/>
        </div>
      </Draggable>
    );
  }

}

export default InstantMessenger
