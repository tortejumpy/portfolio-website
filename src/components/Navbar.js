import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/about', label: 'About' },
  { to: '/techstack', label: 'Tech Stack' },
];

const Navbar = () => (
  <motion.nav className="navbar" initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
    <div className="navbar-content">
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  </motion.nav>
);

export default Navbar; 