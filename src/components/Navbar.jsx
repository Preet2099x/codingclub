import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navlogo from '../assets/images/navlogo.png'; // Import the image

function Navbar() {


  return (
    <div id='mainNavbar'>
      <div id='leftElements'>
        <img src={navlogo} alt="Qezee" />
        <p>Qezee</p>
      </div>
      <div id='rightElements'>
        <button>LOGIN</button>
        <button>SIGN-UP</button>
      </div>
    </div>
  );
}

export default Navbar;


