import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Section2.css'
import blueWaves from '/blue-waves.jpg'

const GrayscaleImage1 = (): JSX.Element => {

    return (
      <motion.img
        className="section-2-image"
        src={blueWaves}
        alt="Grayscale Image"
        initial={{ x: +200, scale: 0.6 }}
        whileInView={{ x: 0, scale: 1}}
        transition={{ duration: 2.5 }} 
      />
    );
  };

const Section2: React.FC = () => { 
    return (
        <div className="section-2-container">       
        <p className="section-2-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare condimentum facilisis. Maecenas molestie metus a mi pellentesque faucibus. Suspendisse in lorem cursus, luctus urna malesuada, porttitor felis. Quisque condimentum lacinia lacus, at finibus augue consequat in. In vestibulum vestibulum elit, eu vehicula sem eleifend in. Maecenas eget felis velit. Nulla facilisi. Donec pretium odio non enim aliquam rhoncus. In lobortis pretium massa in finibus. Aliquam nec sem a justo viverra pellentesque eget in velit. </p>
        <GrayscaleImage1 />
        </div>
    );
    };

export default Section2;