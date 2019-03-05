import React from 'react'
import LoginHeader from '../components/loginHeader'
import LoginLogo from '../components/loginLogo'
import Draggable from 'react-draggable';
import InstantMessengerForm from '../components/InstantMessengerForm'
import { withRouter } from 'react-router-dom'



class InstantMessenger extends React.Component{

  state ={
    username: "",
    password: ""
  }


  redirectSignUp = () =>{
    this.props.history.push("/signup")
  }

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
    console.log(this.props.history)
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
          <div className="handle"><LoginHeader showHandler={this.props.showHandler} chatName="Sign On"/></div>
            <LoginLogo/>
            <InstantMessengerForm authenticateUser={this.props.authenticateUser}
            onChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}
            redirectSignUp={this.redirectSignUp}/>
        </div>
      </Draggable>
    );
  }

}

export default withRouter(InstantMessenger)
