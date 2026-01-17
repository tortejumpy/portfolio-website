import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaGithub, FaRProject, FaChartBar, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJest, SiFirebase, SiPostgresql, SiTailwindcss, SiBootstrap, SiNextdotjs, SiTensorflow, SiPytorch, SiNumpy, SiPandas, SiScikitlearn, SiTableau, SiGooglecolab, SiJupyter, SiGooglecloud, SiApachespark } from 'react-icons/si';
import './Skills.css';

const fullStack = [
  { name: 'React.js', icon: <FaReact color="#61dafb" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#fff" /> },
  { name: 'HTML', icon: <i className="devicon-html5-plain colored" /> },
  { name: 'CSS', icon: <i className="devicon-css3-plain colored" /> },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#38bdf8" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#8cc84b" /> },
  { name: 'Express.js', icon: <SiExpress color="#fff" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#4db33d" /> },
  { name: 'Firebase', icon: <SiFirebase color="#ffcb2b" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
  { name: 'Docker', icon: <FaDocker color="#2496ed" /> },
  { name: 'GitHub Actions', icon: <FaGithub color="#fff" /> },
  { name: 'Jest', icon: <SiJest color="#c21325" /> },
];

const dataScience = [
  { name: 'Python', icon: <FaPython color="#3776ab" /> },
  { name: 'R', icon: <FaRProject color="#276dc3" /> },
  { name: 'SQL', icon: <FaDatabase color="#f5f6fa" /> },
  { name: 'NumPy', icon: <SiNumpy color="#013243" /> },
  { name: 'Pandas', icon: <SiPandas color="#150458" /> },
  { name: 'Scikit-Learn', icon: <SiScikitlearn color="#f7931e" /> },
  { name: 'TensorFlow', icon: <SiTensorflow color="#ff6f00" /> },
  { name: 'PyTorch', icon: <SiPytorch color="#ee4c2c" /> },
  { name: 'Matplotlib', icon: <i className="devicon-matplotlib-plain colored" /> },
  { name: 'Seaborn', icon: <i className="devicon-seaborn-plain colored" /> },
  { name: 'Plotly', icon: <i className="devicon-plotly-plain colored" /> },
  { name: 'Power BI', icon: <FaChartBar color="#f2c811" /> },
  { name: 'Tableau', icon: <SiTableau color="#e97627" /> },
  { name: 'Jupyter', icon: <SiJupyter color="#f37626" /> },
  { name: 'Google Colab', icon: <SiGooglecolab color="#f9ab00" /> },
  { name: 'AWS', icon: <FaAws color="#ff9900" /> },
  { name: 'GCP', icon: <SiGooglecloud color="#4285f4" /> },
  { name: 'Apache Spark', icon: <SiApachespark color="#e25a1c" /> },
];

const Skills = () => (
  <motion.section className="skills-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <h2>Skills & Tools</h2>
    <div className="skills-grid">
      <div className="skills-category">
        <h3>🖥 Full Stack Development (MERN)</h3>
        <div className="skills-list">
          {fullStack.map((item, i) => (
            <motion.div className="skill-item" key={i} whileHover={{ scale: 1.1 }}>
              {item.icon}
              <span>{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="skills-category">
        <h3>📊 Data Science & Analytics</h3>
        <div className="skills-list">
          {dataScience.map((item, i) => (
            <motion.div className="skill-item" key={i} whileHover={{ scale: 1.1 }}>
              {item.icon}
              <span>{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default Skills; 