import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaGithub, FaChartBar } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTensorflow, SiPytorch, SiJupyter, SiGooglecloud, SiNumpy, SiPandas, SiScikitlearn, SiTableau, SiGooglecolab, SiPlotly } from 'react-icons/si';
import './TechStack.css';

const techs = [
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#8cc84b" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#4db33d" /> },
  { name: 'Express', icon: <SiExpress color="#fff" /> },
  { name: 'Python', icon: <FaPython color="#3776ab" /> },
  { name: 'NumPy', icon: <SiNumpy color="#013243" /> },
  { name: 'Pandas', icon: <SiPandas color="#150458" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn color="#f7931e" /> },
  { name: 'TensorFlow', icon: <SiTensorflow color="#ff6f00" /> },
  { name: 'PyTorch', icon: <SiPytorch color="#ee4c2c" /> },
  { name: 'Matplotlib', icon: <FaChartBar color="#11557c" /> },
  { name: 'Seaborn', icon: <FaChartBar color="#43b7ba" /> },
  { name: 'Plotly', icon: <SiPlotly color="#3f4f75" /> },
  { name: 'Power BI', icon: <FaChartBar color="#f2c811" /> },
  { name: 'Tableau', icon: <SiTableau color="#e97627" /> },
  { name: 'Jupyter', icon: <SiJupyter color="#f37626" /> },
  { name: 'Google Colab', icon: <SiGooglecolab color="#f9ab00" /> },
  { name: 'XGBoost', icon: <FaChartBar color="#e68523" /> },
  { name: 'SHAP', icon: <FaChartBar color="#ff0051" /> },
  { name: 'GCP', icon: <SiGooglecloud color="#4285f4" /> },
  { name: 'Docker', icon: <FaDocker color="#2496ed" /> },
  { name: 'GitHub', icon: <FaGithub color="#fff" /> },
];


const TechStack = () => (
  <motion.section className="techstack-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <h2>Tech Stack & Certifications</h2>
    <div className="techstack-grid">
      {techs.map((t, i) => (
        <div className="techstack-item" key={i}>{t.icon}<span>{t.name}</span></div>
      ))}
    </div>
  </motion.section>
);

export default TechStack; 