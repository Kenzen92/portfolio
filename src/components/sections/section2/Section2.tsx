import React from 'react';
import { motion } from 'framer-motion';
import './Section2.css'
import indexPage from '/index-page.png'
import SectionImage from '../../images/section-image/SectionImage';


const Section2: React.FC = () => { 
    return (
        <div className="section-2-container">    
        <motion.div className="section-2-text-container"
        initial={{ scale: 0.6 }}
        whileInView={{ scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }}
        >
        <h1>Teaching Platform App</h1>    
        <p className="section-2-text">
          Welcome to my web development portfolio! In this showcase, I'm excited to present an innovative web application I've crafted using Flask, vanilla JavaScript, and CSS. This functional prototype, hosted on an AWS EC2 instance powered by Ubuntu, is seamlessly served by Nginx and Gunicorn, ensuring smooth user experiences.
        </p>
        
        <h2>Key Features:</h2>
        <ul>
          <li>User Authentication with Google OAuth2:</li>
          <p>
            This application incorporates secure account creation and authentication using Google OAuth2. Teachers can effortlessly create accounts, ensuring a seamless login experience and safeguarding user data.
          </p>

          <li>Custom Calendar Integration:</li>
          <p>
            A standout feature of this app is its custom-built calendar system. Teachers can easily schedule and manage online classes with students, facilitating efficient time management and organization.
          </p>

          <li>File Upload and Download:</li>
          <p>
            Facilitating effective teaching, the platform enables teachers to upload and share study materials with students both before and after classes. This file-sharing functionality streamlines the learning process and enhances collaboration.
          </p>

          <li>Assignment Management:</li>
          <p>
            Empowering teachers, the application provides a dedicated feature to assign and track homework. Teachers can conveniently distribute assignments to students and monitor their progress, fostering an interactive learning environment.
          </p>
        </ul>

        <h2>Technology Stack:</h2>
        <ul>
          <li>Backend Framework: Flask</li>
          <p>
            Leveraging the power of Flask, this application's backend ensures smooth data handling, efficient routing, and robust logic implementation.
          </p>

          <li>Frontend Frameworks: Vanilla JavaScript and CSS</li>
          <p>
            Employing Vanilla JavaScript and CSS, the frontend delivers a clean and user-friendly interface. The combination of these technologies guarantees responsive design and an engaging user experience.
          </p>

          <li>Hosting Environment: AWS EC2 and Ubuntu</li>
          <p>
            The application is hosted on an AWS EC2 instance running Ubuntu. This environment ensures scalability, reliability, and optimized performance, essential for handling users and data seamlessly.
          </p>

          <li>Server Configuration: Nginx and Gunicorn</li>
          <p>
            The application is efficiently served by Nginx, acting as a reverse proxy, while Gunicorn manages the Python application server. This configuration guarantees swift loading times and reliable delivery of content.
          </p>
        </ul>

        <p>
          In conclusion, this web application offers an intuitive solution for teachers to efficiently manage online classes, assignments, and collaboration with students. Its use of Flask, Vanilla JavaScript, and CSS, combined with its secure authentication, custom calendar, and file sharing capabilities, exemplify my skills and expertise in web development. Thank you for exploring this project, and I look forward to discussing its technical intricacies further.
        </p>
        <div className="section-2-link">
        <a href="https://kennysolutions.com/" target="_blank" rel="noopener noreferrer">
          <button className="kenny-solutions-button">
            Visit the page
          </button>
        </a>
      </div>
        </motion.div>
        
        <SectionImage src={indexPage} alt="Grayscale Image" />
        </div>
    );
    };

export default Section2;