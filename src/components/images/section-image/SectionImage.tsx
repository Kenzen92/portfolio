import React from 'react';
import { motion } from 'framer-motion';

interface SectionImageProps {
  src: string;
  alt: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ src, alt }) => {
  return (
    <motion.img
      className="section-2-image"
      src={src}
      alt={alt}
      initial={{ x: +200, scale: 0.6 }}
      whileInView={{ x: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }}
    />
  );
};

export default SectionImage;