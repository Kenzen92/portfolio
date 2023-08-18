import React from 'react';
import { motion } from 'framer-motion';
import './Section3.css'
import desktop from '/desktop.jpg'

const Image2 = (): JSX.Element => {
    
    return (
      <motion.img
        initial={{ x: -200, scale: 0.6 }}
        whileInView={{ x: 200, scale: 1.5}}
        transition={{ duration: 1.5 }} 
        className="section-3-image"
        src={desktop}
        alt="Image"
      />
    );
  };

const Section3: React.FC = () => { 
    return (
        <div className="section-3-container">
          <Image2 />
          <motion.div className="text-container"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            >
            <h1>React Weather App</h1>  
            <p className="section-3-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare condimentum facilisis. Maecenas molestie metus a mi pellentesque faucibus. Suspendisse in lorem cursus, luctus urna malesuada, porttitor felis. Quisque condimentum lacinia lacus, at finibus augue consequat in. In vestibulum vestibulum elit, eu vehicula sem eleifend in. Maecenas eget felis velit. Nulla facilisi. Donec pretium odio non enim aliquam rhoncus. In lobortis pretium massa in finibus. Aliquam nec sem a justo viverra pellentesque eget in velit. </p>
          </motion.div>  
        </div>
    );
    };

export default Section3;