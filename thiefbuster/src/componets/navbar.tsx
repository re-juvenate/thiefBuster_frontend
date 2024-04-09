import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${show ? 'scrolled' : ''}`}>
      <ul className="navbar-list">
        <li><img src="../src/assets/images/logo.png" alt="Logo" /></li>
        <li><a href="#about">About</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#etc">Etc</a></li>
        <a style={{color: '#7808d0', float: 'right'}} className="button" href="#demo">
        <span className="button__icon-wrapper">
            <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
            </svg>
            <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
            </svg>
        </span>
        Try the Demo
        </a>
      </ul>
    </nav>
  );
}