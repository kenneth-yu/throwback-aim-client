import React from 'react'
import Help from '../img/help.png'
import Setup from '../img/setup.png'
import Signon from '../img/signon.png'

class InstantMessengerBottom extends React.Component{
  render(){
    return(
      <div className="instant-messenger"><br/>
      ScreenName:<br/> <input className="signinform" type="text" name="screenname"/>
      <a href="https://www.w3schools.com">Get a Screen Name</a><br/>
      Password: <br/> <input className="signinform" type="text" name="password"/>
      <a href="https://www.w3schools.com">Forgot Password?</a><br/>
      <input type="checkbox" name="gender" value="male" /> Save Password
      <input type="checkbox" name="gender" value="male" /> Auto-login
      <img alt="" src={Help} height="12%" width="12%"/>
      <img alt="" src={Setup} height="12%" width="12%"/>
      <img alt="" className="signonBtn"src={Signon} height="18%" width="18%"/>
      </div>);
  }
}

export default InstantMessengerBottom
