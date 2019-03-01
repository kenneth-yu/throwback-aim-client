import React from 'react'

const Navbar = ({chatName}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">File</li>
        <li className="nav__item">Edit</li>
        <li className="nav__item">Insert</li>
      </ul>
      <span className="nav__warning-level">{chatName}'s Warning Level: 0%</span>
    </nav>
  );
}

export default Navbar
