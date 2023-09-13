import React from 'react';
import { motion  } from 'framer-motion';
import './Section5.css';
import blueWaves from '/blue-waves.jpg'
import SectionImage from '../../images/section-image/SectionImage';



const Section5: React.FC = () => { 
    return (
        <div className="section-5-container">       
        <motion.div className="text-container"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            >
            <h1>Technical Skills</h1>  
            <h2>Programming languages</h2>
            <p className="section-3-text">I am comfortable working with Python and Java in a variety of application domains.  Object-oriented programming, desktop applications, web microservices and many more.</p>
            <p className="section-3-text">As the portfolio work listed here shows, I can write in a variety of common web languages. I'm capable of designing, developing and deploying interactive and dynamic, content-rich and data-driven web applications. Wether working with vanilla HTML, CSS and JavaScript, or taking advantage of libraries and frameworks I have the ability to construct performant and visually appealing applications to suit the needs of any business operation.</p>
          </motion.div>  
        <SectionImage src={blueWaves} alt={"Greysscale Image"} />
        </div>
    );
    };

export default Section5;