import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const resumes = {
  fullstack: {
    url: '/Harsh Pandey_Full_Stack_Resume (1).pdf',
    label: 'Full Stack Resume',
  },
  datascience: {
    url: '/Harsh_Pandey_Data_Analytics_Resume.pdf',
    label: 'Data Science Resume',
  },
};

const experience = [
  { year: '2025', role: 'Associate Developer Intern', org: 'Infotact Solutions' },
  { year: '2023', role: 'Front End Developer Intern', org: 'Varcons Technologies Pvt Ltd'},
  { year: '2022', role: 'Machine Learning Intern', org: 'Coincent' },
];

const Resume = () => {
  return (
    <motion.section className="resume-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <h2>Resume</h2>
      <div className="resume-btns">
        <a href={resumes.fullstack.url} download className="cta-btn">Download Full Stack Resume (PDF)</a>
        <a href={resumes.datascience.url} download className="cta-btn">Download Data Science Resume (PDF)</a>
      </div>
      <div className="resume-timeline">
        <h3>Experience</h3>
        <ul>
          {experience.map((exp, i) => (
            <li key={i}><b>{exp.year}:</b> {exp.role} @ {exp.org}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Resume; 