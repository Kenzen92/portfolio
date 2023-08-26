import React from 'react';
import { motion } from 'framer-motion';
import './ButtonStrip.css';

interface ButtonStripProps {
  link1: string; // The prop should be either 'left' or 'right'
  link1Text: string;
  link2: string;
  link2Text: string;
}

const ButtonStrip: React.FC<ButtonStripProps> = ({ link1, link1Text, link2, link2Text }) => {
  return (
    <motion.div className="button-strip-container"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >  
      <div className="section-link">
        <a href={link1} target="_blank" rel="noopener noreferrer">
          <button className="kenny-solutions-button">
            {link1Text}
          </button>
        </a>
      </div>
      <div className="section-link">
        <a href={link2} target="_blank" rel="noopener noreferrer">
          <button className="github-button">
            {link2Text}
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default ButtonStrip;
