import React from 'react'

const LoginHeader = (props) => {
  const {chatName, showHandler} = props;
  return (
    <div className="loginHeader">
      {chatName}
      <ul className="header__links">
        <li className="header__minimize">_</li>
        <li className="header__maximize">[]</li>
        <li className="header__close" onClick={() => showHandler(chatName)}>&times;</li>
      </ul>
    </div>
  );
}

export default LoginHeader
