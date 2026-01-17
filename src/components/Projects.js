import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const categories = ['AI', 'Data Science', 'Data Analyst', 'Full Stack'];

const projects = {
  AI: [
    {
  title: 'LLM-Powered-Document-Intelligence-RAG-System',
  stack: ['Python', 'LangChain', 'FAISS', 'Pinecone', 'OpenAI API', 'Streamlit'],
  description: 'Designed a production-style Retrieval-Augmented Generation (RAG) system enabling conversational querying of PDFs and CSVs, optimized for scalability, cost-efficiency, low latency, and reduced hallucination.',
  github: 'https://github.com/tortejumpy/LLM-Powered-Document-Intelligence-Retrieval-System',
  tags: ['Generative AI', 'RAG', 'LLMs', 'Document Intelligence']
  },

  {
  title: 'LucidNav-Agentic-AI-Vision-Assistant',
  stack: ['Python', 'YOLOv8', 'MediaPipe', 'DeepFace', 'EasyOCR', 'Twilio'],
  description: 'Developed a real-time agentic AI vision assistant for visually impaired users by fusing object detection, gesture recognition, emotion analysis, OCR, and speech synthesis into context-aware audio guidance and emergency response.',
  github: 'https://github.com/tortejumpy/LucidNav',
  tags: ['Computer Vision', 'Agentic AI', 'Accessibility', 'Multimodal AI']
  },
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
  title: 'Airbnb-Price-Prediction-System',
  stack: ['Python', 'Scikit-learn', 'Pandas', 'ColumnTransformer', 'Pipeline'],
  description: 'Developed an end-to-end machine learning pipeline to predict optimal Airbnb listing prices by handling skewed data, high-cardinality features, and comparing regression models to deliver explainable pricing insights.',
  github: 'https://github.com/tortejumpy/AirBnB-price-prediction',
  tags: ['Machine Learning', 'Regression', 'Pricing Analytics', 'Predictive Modeling']
  },

   {
  title: 'Telecom-Customer-Churn-Prediction',
  stack: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE', 'SHAP'],
  description: 'Built an interpretable churn prediction system focused on recall, addressing class imbalance and identifying key churn drivers to support targeted retention strategies and revenue protection.',
  github: 'https://github.com/tortejumpy/customer-churn-prediction',
  tags: ['Machine Learning', 'Churn Analysis', 'Customer Analytics', 'Explainable AI']
  },
  {
  title: 'IMDB-Movie-Review-Sentiment-Analysis',
  stack: ['Python', 'NLP', 'TF-IDF', 'Logistic Regression', 'Word2Vec'],
  description: 'Designed an NLP pipeline for sentiment classification on 50K IMDB reviews, experimenting with layered textual features and demonstrating that strong TF-IDF representations outperform complex feature combinations.',
  github: 'https://github.com/tortejumpy/IMDB-movie-review-sentiment-analysis',
  tags: ['NLP', 'Sentiment Analysis', 'Text Classification', 'Machine Learning']
  },
  {
  title: 'News-Article-Classification-System',
  stack: ['Python', 'NLP', 'TF-IDF', 'Logistic Regression', 'Statistical Validation'],
  description: 'Built a scalable multi-class news classification system using TF-IDF and classical ML models, supported by EDA, error analysis, and statistical tests to ensure stable and interpretable performance.',
  github: 'https://github.com/tortejumpy/news-article-classification',
  tags: ['NLP', 'Text Classification', 'Machine Learning', 'Information Retrieval']
  }



  ],
  'Data Analyst': [
  {
  title: 'KPMG-Customer-Transaction-Analysis',
  stack: ['Microsoft Excel', 'Pivot Tables', 'VLOOKUP/XLOOKUP', 'Data Cleaning', 'CLV Modeling'],
  description: 'Converted messy customer and transaction Excel data into executive-ready insights by performing customer segmentation, revenue analysis, and Customer Lifetime Value (CLV) estimation to support targeted marketing and expansion strategies.',
  github: 'https://github.com/tortejumpy/-KPMG-Data-Analysis-using-Excel',
  tags: ['Data Analytics', 'Customer Segmentation', 'CLV', 'Business Intelligence']
  },
  {
  title: 'Airline-Data-Management-and-Performance-Analytics',
  stack: ['Power BI', 'Power Query', 'DAX', 'Row-Level Security', 'Power BI Service'],
  description: 'Built a production-ready airline analytics dashboard by integrating flight, passenger, and ticket datasets, enabling real-time performance tracking, booking behavior analysis, and secure role-based access for stakeholders.',
  github: 'https://training-uploads.internshala.com/power-bi-ds-v3/uploads/projects/v_2/4931097/gho7tuuvp0o-2531582.zip',
  tags: ['Business Intelligence', 'Power BI', 'Data Modeling', 'Analytics']
  },

  {
  title: 'Walmart-Sales-Performance-Analysis',
  stack: ['MySQL', 'CTEs', 'Window Functions', 'LAG', 'RANK', 'NTILE'],
  description: 'Performed end-to-end sales, profitability, and customer behavior analysis on Walmart transaction data using advanced SQL techniques to uncover growth trends, high-value customers, anomalies, and retention opportunities.',
  github: 'https://github.com/tortejumpy/Sales-Performance-Analysis-of-Walmart-Stores-Using-Advanced-MySQL',
  tags: ['SQL', 'Retail Analytics', 'Business Analysis', 'Data Analytics']
  },

  {
  title: 'EV-Market-Analysis-and-Recommendation-System',
  stack: ['Python', 'Pandas', 'NumPy', 'EDA', 'Statistical Testing'],
  description: 'Analyzed electric vehicle market data to uncover efficiency patterns, validate industry assumptions using hypothesis testing, detect anomalies, and build a scoring-based EV recommendation engine for informed buyer decisions.',
  github: 'https://github.com/tortejumpy/EV-Data-Analysis',
  tags: ['Data Science', 'EDA', 'Statistics', 'Recommendation System']
  }


    
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