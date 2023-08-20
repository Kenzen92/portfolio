import React from 'react';
import { motion  } from 'framer-motion';
import './Section5.css';
import blueWaves from '/blue-waves.jpg'
import SectionImage from '../../images/section-image/SectionImage';



const Section5: React.FC = () => { 
    return (
        <div className="section-5-container">       
        <motion.div className="text-container"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }}
            >
            <h1>Some Next App</h1>  
            <p className="section-3-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare condimentum facilisis. Maecenas molestie metus a mi pellentesque faucibus. Suspendisse in lorem cursus, luctus urna malesuada, porttitor felis. Quisque condimentum lacinia lacus, at finibus augue consequat in. In vestibulum vestibulum elit, eu vehicula sem eleifend in. Maecenas eget felis velit. Nulla facilisi. Donec pretium odio non enim aliquam rhoncus. In lobortis pretium massa in finibus. Aliquam nec sem a justo viverra pellentesque eget in velit. </p>
          </motion.div>  
        <SectionImage src={blueWaves} alt={"Greysscale Image"} />
        </div>
    );
    };

export default Section5;