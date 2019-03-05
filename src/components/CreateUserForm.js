import React from 'react'
// import Signon from '../img/signon.png'

const CreateUserForm = ({username, password, passwordConfirm, createUser, onChange}) =>{
    // const disabledClass = !username.length && !password.length ? 'message-form__submit--disabled' : null;
    return(
      <form className="create-user-form" onSubmit={(e)=> {createUser(e, username, password)}}>
        Pick a ScreenName: <br/><input className="sign-up-form"  autoComplete="username" type="text" name="screenname" value={username} onChange={onChange}/><br/><br/>
        Create a password: <br/><input className="sign-up-form" autoComplete="new-password" type="password" name="password" value={password} onChange={onChange}/><br/><br/>
        Confirm password: <br/><input className="sign-up-form" autoComplete="new-password" type="password" name="passwordConfirm" value={passwordConfirm} onChange={onChange}/><br/><br/>
        <div className="message-form__actions">
          <br/>
          <input type="submit" value="Submit" onClick={(e)=> {createUser(e, username, password)}}/>
        </div>
      </form>
    )
}

export default CreateUserForm
