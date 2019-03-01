import React from 'react'

const LoginHeader = (props) => {
  const {chatName} = props;
  return (
    <div className="loginHeader">
      {chatName}
      <ul className="header__links">
        <li className="header__minimize">_</li>
        <li className="header__maximize">[]</li>
        <li className="header__close">&times;</li>
      </ul>
    </div>
  );
}

export default LoginHeader
