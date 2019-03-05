import React from 'react'

const CreateUserNavbar = ({chatName}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">File</li>
        <li className="nav__item">Edit</li>
        <li className="nav__item">Insert</li>
      </ul>
    </nav>
  );
}

export default CreateUserNavbar
