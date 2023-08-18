import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView  } from 'framer-motion';
import HeroImage from './components/images/HeroImage';
import Section2 from './components/sections/section2/Section2';
import Section3 from './components/sections/section3/Section3';
import Section4 from './components/sections/section4/Section4';

import desktop from '/desktop.jpg'
import './App.css'


function App(): JSX.Element {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <>
    <HeroImage />
    <Section2 />
    <Section3 />
    <Section4 />
    </>
  );
}

export default App;

  // const GrayscaleImage1 = (): JSX.Element => {
  //   const grayscaleValue =  scrollY / window.innerHeight;

  //   const imageStyle: React.CSSProperties = {
  //     filter: `grayscale(${1-grayscaleValue})`,
  //   };

  //   return (
  //     <motion.img
  //       src={desktop}
  //       alt="Grayscale Image"
  //       style={imageStyle}
  //     />
  //   );
  // };

  // const GrayscaleImage2 = (): JSX.Element => {
  //   const grayscaleValue =  scrollY / window.innerHeight;

  //   const imageStyle: React.CSSProperties = {
  //     filter: `grayscale(${1-grayscaleValue})`,
  //   };

  //   return (
  //     <motion.img 
  //       src={blueWaves}
  //       alt="Grayscale Image"
  //       style={imageStyle}
  //     />
  //   );
  // };

      {/* <div ref={elementRef}>
      <div className="second-image">
      <GrayscaleImage1 />
      <GrayscaleImage2 />
      </div>
    </div> */}