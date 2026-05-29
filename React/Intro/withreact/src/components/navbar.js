import React from 'react';
import Footer from './footer';

const navbar = (promps) => {
  return (
    <div>
        <div className="username">{promps.username}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default navbar
