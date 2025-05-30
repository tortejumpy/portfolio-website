import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './GitHubSection.css';

const GitHubSection = () => (
  <motion.section className="github-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <h2>GitHub Activity</h2>
    <div className="github-graph-placeholder">[GitHub Contributions Graph Here]</div>
    <a href="https://github.com/tortejumpy" target="_blank" rel="noopener noreferrer" className="github-link">
      <FaGithub /> View My GitHub
    </a>
  </motion.section>
);

export default GitHubSection; 