// src/components/Navbar.jsx
import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="gradient-text">SWATHI N</h1>
      
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
