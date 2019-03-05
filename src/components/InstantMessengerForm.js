import React from 'react'
import Help from '../img/help.png'
import Setup from '../img/setup.png'
// import Signon from '../img/signon.png'

const InstantMessengerForm = ({username, password, authenticateUser, onChange, redirectSignUp}) =>{
  console.log(redirectSignUp)
    const disabledClass = !username.length && !password.length ? 'message-form__submit--disabled' : null;
    return(
      <form className="instant-messenger-form" onSubmit={(e)=> {authenticateUser(e, username, password)}}>
        ScreenName:<br/><input className="signinform" type="text" name="screenname" value={username} onChange={onChange}/>
        <span class="pseudolink" onClick={() => redirectSignUp()}>Get a Screen Name</span><br/>   
        Password: <br/> <input className="signinform" type="current-password" name="password" value={password} onChange={onChange}/>
        <a href="http://localhost:3001/reset">Forgot Password?</a><br/>
        <input type="checkbox" name="gender" value="male" /> Save Password
        <input type="checkbox" name="gender" value="male" /> Auto-login
        <img alt="" src={Help} height="12%" width="12%"/>
        <img alt="" src={Setup} height="12%" width="12%"/>
        <div className="message-form__actions">
        <button
        type="button"
        onClick={(e)=> {authenticateUser(e, username, password)}}
        disabled={!username.length && !password.length}
        className={`message-form__submit ${disabledClass}`}></button>
        </div>
      </form>
    )
}

export default InstantMessengerForm
