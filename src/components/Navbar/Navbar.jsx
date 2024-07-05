import './navbar.css'
import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="logo" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li>Contact</li>
        </ul>
    </nav>
  );
}

export default Navbar 