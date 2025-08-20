import React from 'react';
import './header.css';
import  Logo from '../body/img/ico.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1><img src={Logo} alt="Logo" /></h1>
         
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;