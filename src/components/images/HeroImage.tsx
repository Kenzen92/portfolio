import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '/logo.jpeg'
import './HeroImage.css'


    

const HeroImage: React.FC = () => { 
    const { scrollYProgress } = useScroll()
    const scrollRange = useTransform(scrollYProgress, [0, 0.4], [0, 300]);

    return (
        <motion.div
        className="hero-image-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: scrollRange.get() }}
        transition={{ duration: 1 }}
        >
            <motion.img src={logo}
            className='logo'
            style={{ y: scrollRange }}
            ></motion.img>
        </motion.div>
    );
    };

export default HeroImage;
