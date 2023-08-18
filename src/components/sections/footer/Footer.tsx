import React from 'react';
import { motion, useScroll, useTransform  } from 'framer-motion';
import './Footer.css';

const Section4: React.FC = () => {
    const { scrollYProgress } = useScroll()
    const scrollRange = useTransform(scrollYProgress, [0, 0.5], [25, 0]);
  

  return (
    <motion.div
    style={{ perspective: scrollRange }}
      className="footer-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <footer className="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/james-kenny-b31863278/" target="_blank" rel="noopener noreferrer">
          <button className="linkedin-button">
            Visit my Linkedin
          </button>
        </a>
          <a href="https://github.com/Kenzen92" target="_blank" rel="noopener noreferrer">
          <button className="github-button">
            Visit my GitHub
          </button>
        </a>
      </div>
      <p className="footer-message">This page is designed, created and owned by James Kenny. All rights reserved. 2023</p>
    </footer>
    </motion.div>
  );
};

export default Section4;

