import './navbar.css'
import React from 'react';
import logo from '../../assets/log-unsika-removebg-preview.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
  );
}

export default Navbar 