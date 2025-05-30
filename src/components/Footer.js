import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaKaggle } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-links">
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/resume">Resume</a>
      <a href="/about">About</a>
    </div>
    <div className="footer-social">
      <a href="https://github.com/tortejumpy" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/harsh-pandey-363a63306/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      
    </div>
    <div className="footer-copy">
      &copy; {new Date().getFullYear()} Harsh Pandey. Last updated: {new Date().toLocaleDateString()}
    </div>
  </footer>
);

export default Footer; 