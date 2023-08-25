import React from 'react';
import { motion } from 'framer-motion';
import './Section3.css'
import reactWeather from '/react-weather.png'
import SectionImage from '../../images/section-image/SectionImage';

const Section3: React.FC = () => { 
    return (
        <div className="section-3-container">
          <div className="column-1">
          <h1>React Weather App</h1> 
          <SectionImage src={reactWeather} alt="Grayscale Image" />
          <div className="section-3-link-container">
          <div className="section-3-link">
          <a href="https://kennysolutions.com/" target="_blank" rel="noopener noreferrer">
            <button className="kenny-solutions-button">
              Visit the live site
            </button>
          </a>
        </div>
        <div className="section-3-link">
          <a href="https://kennysolutions.com/" target="_blank" rel="noopener noreferrer">
            <button className="github-button" >
              View on GitHub
            </button>
          </a>
        </div>
        </div>
          </div>
          <motion.div className="text-container"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }}
            >
            <p className="section-3-text">
            <h2> Introducing WeatherApp: A React-Powered Weather Application</h2> 
            <p>Welcome to WeatherApp, an innovative weather application developed using React and powered by an external API. This compact and efficient one-page app provides users with real-time weather data for any location of their choice.</p>
            <div className="container">
            <span className="react-logo">
              <span className="nucleo"></span>
            </span>
            <h2 className="title">React</h2>
            </div>
            <br></br>
            <h3>Key Features: </h3>

            <p>Current Weather: Instantly access up-to-date weather conditions for your selected location.
            Today's Forecast: Dive into a detailed forecast for the current day, ensuring you're prepared for whatever lies ahead.
            Ten-Day Forecast: Plan your week with confidence using the comprehensive ten-day forecast feature.
            Technology Behind the Magic:
            WeatherApp leverages the power of React components to seamlessly present weather data in a user-friendly format. By combining React's efficiency and reactivity with an external weather API, this app offers real-time updates and a smooth user experience.  </p>
            </p>
           
            
          </motion.div>  
        </div>
    );
    };

export default Section3;