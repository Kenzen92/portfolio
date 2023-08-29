import React from 'react';
import { motion, useScroll, useTransform  } from 'framer-motion';
import './Slidebar.css';


interface SlidebarProps {
  direction: string; 
  start: number;
  finish: number;
}

const Slidebar: React.FC<SlidebarProps> = ({ direction, start, finish }) => {
  const { scrollYProgress } = useScroll();
  let scrollRange;
  let xPos;

  if (direction === "left") {
    scrollRange = useTransform(scrollYProgress, [start, finish], [18, 0]);
    xPos = useTransform(scrollYProgress, [start, finish], [1000, 0]);
  } else if (direction === "right") {
    scrollRange = useTransform(scrollYProgress, [start, finish], [-18, 0]);
    xPos = useTransform(scrollYProgress, [start, finish], [-1500, 0]);
  }
    

  return (
    <motion.div
    style={{ rotate: scrollRange, x: xPos }}
      className="slidebar-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
    </motion.div>
  );
};

export default Slidebar;
