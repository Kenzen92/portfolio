import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './HeroImage.css'

const HeroImage: React.FC = () => { 
    return (
        <motion.div
        className="hero-image-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <p>Hero Image - Fade in</p>
        </motion.div>
    );
    };

export default HeroImage;
