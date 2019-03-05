import React from 'react'
import Draggable from 'react-draggable';
import CreateUserHeader from '../components/CreateUserHeader'
import CreateUserNavbar from '../components/CreateUserNavbar'
import CreateUserForm from '../components/CreateUserForm'
import { withRouter } from 'react-router-dom'

class CreateUser extends React.Component{
  state ={
    username: "",
    password: "",
    passwordConfirm: ""
  }

  createUser = (e, val) => {
    e.preventDefault();
    //Authenticate User Login Here
    console.log("authentication not set up")
    console.log("username", this.state.username)
    console.log("password", this.state.password)
    this.props.history.push("/")
  };

  showHandler = () => {
    this.props.history.push("/")
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
    else if(event.target.name ==="passwordConfirm"){
      this.setState({
        passwordConfirm: event.target.value
      })
    }
  };

  render(){
    return(
      <Draggable
        handle=".handle"
        defaultPosition={{x: 200, y: 100}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="create-user">
          <div className="handle"><CreateUserHeader showHandler={this.showHandler} chatName="Sign Up"/></div>
          <CreateUserNavbar/>
          <CreateUserForm createUser={this.createUser}
          onChange={this.handleChange}
          username={this.state.username}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}/>
        </div>
      </Draggable>
    )
  }
}

export default CreateUser
