import React, { useRef } from 'react';
import { motion, motionValue, useInView, useTransform } from 'framer-motion';
import './Section2.css'
import indexPage from '/index-page.png'

const Image1 = (): JSX.Element => {
  const screenWidth = window.innerWidth;
  console.log(window.outerWidth)
  console.log(screenWidth);
    // Create a MotionValue using the screenWidth
    const screenWidthValue = motionValue(screenWidth);

    // Use the screenWidthValue in the useTransform function
    const translatedScale = useTransform(
     screenWidthValue,
     [0, 1920],
     [0, 1.5]
   );
   const translatedXValue = useTransform(
    screenWidthValue,
    [0, 1920],
    [0, -200]
   )
   const intScale = translatedScale.get();
   console.log(intScale);
   

    return (
      <motion.img
        className="section-2-image"
        src={indexPage}
        alt="Grayscale Image"
        initial={{ x: +200, scale: 0.6 }}
        whileInView={{ x: 0, scale: intScale }}
        transition={{ duration: 2.5 }} 
      />
    );
  };

const Section2: React.FC = () => { 
    return (
        <div className="section-2-container">    
        <motion.div className="text-container"
        initial={{ scale: 0.6 }}
        whileInView={{ scale: 1 }}
        >
        <h1>Teaching Platform App</h1>    
        <p className="section-2-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare condimentum facilisis. Maecenas molestie metus a mi pellentesque faucibus. Suspendisse in lorem cursus, luctus urna malesuada, porttitor felis. Quisque condimentum lacinia lacus, at finibus augue consequat in. In vestibulum vestibulum elit, eu vehicula sem eleifend in. Maecenas eget felis velit. Nulla facilisi. Donec pretium odio non enim aliquam rhoncus. In lobortis pretium massa in finibus. Aliquam nec sem a justo viverra pellentesque eget in velit. </p>
        </motion.div>
        
        <Image1 />
        </div>
    );
    };

export default Section2;