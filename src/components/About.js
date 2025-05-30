import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const certificates = [
  {
    name: 'Udemy Data Science Bootcamp 2025 ',
    file: '/data science.pdf',
  },
  {
    name: 'Udemy Full Stack Web Development Bootcamp',
    file: '/Udemy Full Stack Certificate.pdf',
  },
  {
    name: 'JPMorgan Chase & Co Software	Engineering	Job	Simulation',
    file: '/software engineering j p morgan.pdf',
  },
];

const aboutData = {
  name: 'Harsh Pandey',
  age: 22,
  college: 'AMC Engineering College',
  degree: 'B.E Information Science and Engineering',
  certificates,
  hobbies: ['Hackathons', 'Open Source Contribution', 'Creative Coding'],
  programming: ['Python', 'JavaScript', 'C++', 'SQL'],
  techstacks: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'LightGBM', 'GitHub Actions', 'Power BI'],
  email: 'harshpandey472@gmail.com',
  contact: '+91-866-018-2267',
};

const About = () => (
  <motion.section className="about-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <h2>About Me</h2>
    <div className="about-grid">
      <div>
        <b>Name:</b> {aboutData.name}<br/>
        <b>Age:</b> {aboutData.age}<br/>
        <b>College:</b> {aboutData.college}<br/>
        <b>Degree:</b> {aboutData.degree}<br/>
        <b>Email:</b> {aboutData.email}<br/>
        <b>Contact:</b> {aboutData.contact}<br/>
      </div>
      <div>
        <b>Certificates:</b>
        <ul>
          {aboutData.certificates.map((c, i) => (
            <li key={i}>
              {c.name}
              {c.file && (
                <>
                  {' '}<a href={c.file} download className="cert-btn">Download</a>
                  {' '}<a href={c.file} target="_blank" rel="noopener noreferrer" className="cert-btn">View</a>
                </>
              )}
            </li>
          ))}
        </ul>
        <b>Hobbies:</b>
        <ul>{aboutData.hobbies.map((h, i) => <li key={i}>{h}</li>)}</ul>
      </div>
      <div>
        <b>Programming Languages:</b>
        <ul>{aboutData.programming.map((p, i) => <li key={i}>{p}</li>)}</ul>
        <b>Tech Stacks:</b>
        <ul>{aboutData.techstacks.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </div>
    </div>
  </motion.section>
);

export default About; 