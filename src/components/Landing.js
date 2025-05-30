import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaChartLine } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTensorflow, SiPytorch } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Landing.css';

// TODO: Replace with your real profile picture URL
const avatarUrl = '/profile.jpg'; // Place your image in public/profile.jpg

const techIcons = [
  <FaReact key="react" color="#61dafb" />,
  <FaNodeJs key="node" color="#8cc84b" />,
  <SiExpress key="express" color="#fff" />,
  <SiMongodb key="mongo" color="#4db33d" />,
  <FaPython key="python" color="#3776ab" />,
  <SiTensorflow key="tf" color="#ff6f00" />,
  <SiPytorch key="pt" color="#ee4c2c" />,
  <FaDatabase key="db" color="#f5f6fa" />,
  <FaChartLine key="ds" color="#f5f6fa" />,
  <FaGithub key="gh" color="#fff" />
];

const Landing = () => (
  <motion.section
    className="landing-section"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="avatar-wrapper"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, delay: 0.3 }}
    >
      <img src={avatarUrl} alt="Profile" className="avatar-img" />
    </motion.div>
    <motion.h1 className="landing-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
      Harsh Pandey
    </motion.h1>
    <motion.h2 className="landing-role" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
    Data Scientist & Full Stack Developer
    </motion.h2>
    <motion.p className="landing-tagline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
      "Building intelligent, scalable solutions at the intersection of web and data."
    </motion.p>
    <motion.div className="cta-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
      <Link to="/resume" className="cta-btn">View Resume</Link>
      <Link to="/projects" className="cta-btn">Projects</Link>
    </motion.div>
    <motion.div className="tech-icons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>
      {techIcons.map((icon, i) => (
        <motion.span key={i} className="tech-icon" whileHover={{ scale: 1.2, rotate: 8 }}>
          {icon}
        </motion.span>
      ))}
    </motion.div>
  </motion.section>
);

export default Landing; 