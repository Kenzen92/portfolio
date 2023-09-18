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
            I spent the last 5 years working as an online freelance teacher. I've used many products for managing classes and schedules, and none of them really did exactly what I needed in a simple and intuitative fashion. 
            I decided this would make a great project for me to tackle, and a challenge in terms of design, logic and architecture that would level up my web application skills.
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