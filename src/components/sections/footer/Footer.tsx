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
      {/* Your content here */}
    </motion.div>
  );
};

export default Section4;
