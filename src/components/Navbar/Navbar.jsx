import './navbar.css'
import React, { useEffect, useState } from 'react';
import logo from '../../assets/log-unsika-removebg-preview.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
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