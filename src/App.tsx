import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView  } from 'framer-motion';
import HeroImage from './components/images/HeroImage';
import Section2 from './components/sections/section2/Section2';
import Section3 from './components/sections/section3/Section3';
import Section4 from './components/sections/section4/Section4';
import Section5 from './components/sections/section5/Section5';
import Footer from './components/sections/footer/Footer';

import './App.css'


function App(): JSX.Element {
  
  return (
    <>
    <HeroImage />
    <Section2 />
    <Section4 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />
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