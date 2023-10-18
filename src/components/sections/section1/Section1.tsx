import React from 'react';
import './Section1.css'



const Section1: React.FC = () => { 
  return (
    <div className="section-1-container">  
        <h1>James Kenny Portfolio</h1>    
        <p>Welcome to my portfolio. I'm a computer science graduate and junior developer hoping to find a position in the
          industry where I can develop my skills and make a significant difference to the projects I work on.</p>
        <br></br>
        <p>This portfolio consists of two web applications. One full-stack application I designed and built to help online teachers manage their schedules, classes and students. 
          The second app is a weather app heavily inspired by the Apple weather app, and build using React. 
          Continue reading to discover the technology powering them, and try them out for yourself.</p>
    </div>
  );
};

export default Section1;