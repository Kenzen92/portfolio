import React, { useState, useEffect }  from 'react';
import { motion, useScroll, useTransform  } from 'framer-motion';
import './Slidebar.css';


interface SlidebarProps {
  direction: string; 
  start: number;
  finish: number;
}

const Slidebar: React.FC<SlidebarProps> = ({ direction, start, finish }) => {
  const { scrollYProgress } = useScroll();
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      console.log(windowSize);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  let windowWidth = windowSize[0]

  let xPos;
  if (direction === "left") {

    xPos = useTransform(scrollYProgress, [start, finish], [windowWidth, 0]);
  } else if (direction === "right") {

    xPos = useTransform(scrollYProgress, [start, finish], [-windowWidth, 0]);
  }
    

  return (
    <motion.div
    style={{ x: xPos }}
    className="slidebar-container"
    >
    </motion.div>
  );
};

export default Slidebar;

// rotate: scrollRange