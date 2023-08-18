import React from 'react';
import { motion, useScroll, useTransform  } from 'framer-motion';
import './Section4.css';

const Section4: React.FC = () => {
    const { scrollYProgress } = useScroll()
    const scrollRange = useTransform(scrollYProgress, [0, 1], [18, 0]);
    const xPos = useTransform(scrollYProgress, [0,1], [1000, 0]);
  


  return (
    <motion.div
    style={{ rotate: scrollRange, x: xPos }}
      className="section-4-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Your content here */}
    </motion.div>
  );
};

export default Section4;