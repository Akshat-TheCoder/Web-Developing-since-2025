import React from 'react'
import "./navbar.css"

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {props.username.trim() && (
          <div className="username">{props.username}</div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
