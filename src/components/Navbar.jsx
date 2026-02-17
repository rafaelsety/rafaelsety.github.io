import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">RAFAEL.</div>
      <div className="nav-links">
        <a href="#about" className="nav-item">About</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#hobby" className="nav-item">Hobby</a>
        <a href="#games" className="nav-item">Arcade</a>
      </div>
    </nav>
  );
};

export default Navbar;
