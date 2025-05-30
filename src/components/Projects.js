import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const categories = ['AI', 'Data Science', 'Full Stack'];

const projects = {
  AI: [
    {
      title: 'Serenity-Bot' ,
      stack: ['Python', 'Gemini API', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      description: 'Conversational AI therapy chatbot using Gemini 1.5 flash along with with CBT/DBT techniques and interactive self-care tools.',
      github: 'https://github.com/tortejumpy/serenity-bot',
      tags: ['LLM', 'Fast API', 'AI', 'Chatbot'],
    },
  
    {
      title: 'AI-Voice-Based-Personal-Virtual-Assistant',
      stack: ['Python', 'SpeechRecognition', 'pyttsx3', 'Googletrans', 'Google Gemini-Pro API'],
      description: 'A multilingual AI-powered assistant enabling dynamic conversations in 6 languages with task and OS automation.',
      github: 'https://github.com/tortejumpy/AI-Voice-Based-Personal-Virtual-Assistant',
      tags: ['AI', 'Voice Assistant', 'LLM'],
    },

    {
      title: 'Math With Gesture Using AI',
      stack: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning', 'Computer Vision'],
      description: 'An AI-driven app that recognizes hand gestures to perform math operations, making learning interactive and engaging',
      github: 'https://github.com/tortejumpy/Math-with-gesture-using-ai',
      tags: ['ML', 'OpenCV', 'AI'],
    },
  ],
  'Data Science': [
    {
      title: 'Customer Churn Prediction',
      stack: ['Python', 'XGBoost', 'SHAP'],
      description: 'Predicting customer churn with explainable AI and visual insights.',
      github: 'https://github.com/tortejumpy/churn-prediction-app',
      tags: ['ML', 'EDA', 'XGBoost', 'SHAP'],
    },
    {
      title: 'Real Time Fraud Detection',
      stack: ['Python', 'Isolation Forest', 'Autoencoder', 'Streamlit', 'Real-Time Data Processing'],
      description: 'A high-performance system detecting fraudulent transactions in under 2 seconds using anomaly detection models and real-time visualization.',
      github: 'https://github.com/tortejumpy/real-time-fraud-detection',
      tags: ['Streamlt', 'Isolation Forest', 'ML'],
    },
  ],
  'Full Stack': [
    {
      title: 'AI-Powered Data Visualization',
      stack: ['MERN', 'WebSockets', 'ML'],
      description: 'Real-time analytics visualization with AI insights and live updates.',
      github: 'https://github.com/tortejumpy/data-viz-app',
      tags: ['JWT Auth', 'REST APIs', 'ML'],
    },
    {
      title: 'Travel Booking Website',
      stack: ['MERN', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      description: 'A full-featured web app for browsing, booking, and reviewing travel tours, built to deliver a personalized trip planning experience.',
      github: 'https://github.com/tortejumpy/travel-booking-website',
      tags: ['JWT Auth', 'REST APIs', 'MongoDB'],
    },
  ],
};

const Projects = () => {
  const [active, setActive] = useState('AI');
  return (
    <motion.section className="projects-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <h2>Projects</h2>
      <div className="project-filters">
        {categories.map(cat => (
          <button key={cat} className={active === cat ? 'active' : ''} onClick={() => setActive(cat)}>{cat}</button>
        ))}
      </div>
      <div className="projects-grid">
        {projects[active].map((proj, i) => (
          <motion.div className="project-card" key={i} whileHover={{ scale: 1.04 }}>
            <h3>{proj.title}</h3>
            <div className="project-stack">{proj.stack.join(', ')}</div>
            <p>{proj.description}</p>
            <div className="project-tags">{proj.tags.map(t => <span key={t}>{t}</span>)}</div>
            {proj.visual && <img src={proj.visual} alt="Visual Result" className="project-visual" />}
            <div className="project-links">
              {proj.demo && <a href={proj.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live</a>}
              <a href={proj.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects; 