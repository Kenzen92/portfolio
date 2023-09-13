import React from 'react';
import { motion } from 'framer-motion';
import './Section2.css'
import indexPage from '/index-page.png'
import SectionImage from '../../images/section-image/SectionImage';
import desktopDashboard from '/desktop-dashboard.png'
import logos from '/logos.png'



const Section2: React.FC = () => { 
  return (
    <div className="section-2-container">  
      <div className="row-1"> 
        <motion.div className="section-2-text-container"
        initial={{ opacity: 0, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        >
          <h1>Teaching Platform App</h1>    
          <p className="section-2-text">
            Welcome to my web development portfolio! In this showcase, I'm excited to present an innovative web application I've crafted using Flask, vanilla JavaScript, and CSS. This functional prototype, hosted on an AWS EC2 instance powered by Ubuntu, is seamlessly served by Nginx and Gunicorn, ensuring smooth user experiences.
          </p>
        </motion.div>

        <SectionImage src={indexPage} alt="Grayscale Image" />
      </div>
      <div className="row-2">
        <motion.div className="section-2-text-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          >
          <h2>Key Features</h2>
          <p>This app offers secure Google OAuth2-based user authentication and a custom calendar system for streamlined class scheduling. Teachers can upload and share study materials, manage assignments, and monitor progress effectively, enhancing the learning experience.</p>
          </motion.div>
        <SectionImage src={desktopDashboard} alt="Grayscale Image" />
        <div className="section-2-text-container">
        <h2>Technology Stack</h2>
        <p>The app's backend utilizes Flask, ensuring efficient data handling, while the frontend employs Vanilla JavaScript and CSS for a responsive interface. It's hosted on AWS EC2 with Ubuntu, ensuring scalability. Nginx serves as a reverse proxy, and Gunicorn manages the Python application server, guaranteeing fast and reliable content delivery.</p>
        <SectionImage src={logos} alt="flask, nginx and gunicorn logo" />
        </div>
      </div>
    </div>
  );
};

export default Section2;