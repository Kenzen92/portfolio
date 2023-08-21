import React from 'react';
import { motion, useScroll, useTransform  } from 'framer-motion';
import './Section4.css';


interface Section4Props {
  direction: string; // The prop should be either 'left' or 'right'
}

const Section4: React.FC<Section4Props> = ({ direction }) => {
  const { scrollYProgress } = useScroll();
  let scrollRange;
  let xPos;

  if (direction === "left") {
    console.log("lefting");
    scrollRange = useTransform(scrollYProgress, [0.2, 0.6], [18, 0]);
    xPos = useTransform(scrollYProgress, [0.2, 0.6], [1000, 0]);
  } else if (direction === "right") {
    scrollRange = useTransform(scrollYProgress, [0.7, 1], [-18, 0]);
    xPos = useTransform(scrollYProgress, [0.7, 1], [-1000, 0]);
  }
    

  return (
    <motion.div
    style={{ rotate: scrollRange, x: xPos }}
      className="section-4-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
    </motion.div>
  );
};

export default Section4;
