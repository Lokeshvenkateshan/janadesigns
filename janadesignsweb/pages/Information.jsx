import React from 'react';
import { motion } from 'framer-motion';
import '../styles/information.css';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Information = () => {
  return (
    <motion.section 
      className="info-section" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 className="info-title" variants={itemVariants}>
        About Jana Designs
      </motion.h2>
      <motion.p className="info-paragraph" variants={itemVariants}>
        Jana Designs, led by the visionary Janarthanan, is a celebration of craftsmanship and tradition. With over five years of dedicated experience, Janarthanan creates exquisite silk saree designs that marry timeless artistry with modern aesthetics.
      </motion.p>
      <motion.p className="info-paragraph" variants={itemVariants}>
        Each design is meticulously crafted, pixel by pixel, to ensure perfection for the weavers. This attention to detail and passion for weaving culture ensures that every saree tells a unique story, embodying elegance, heritage, and innovation.
      </motion.p>
      <motion.p className="info-paragraph" variants={itemVariants}>
        Jana Designs is more than just a design house — it's a bridge connecting age-old weaving traditions with contemporary fashion sensibilities, empowering weavers and enchanting customers alike.
      </motion.p>
    </motion.section>
  );
};

export default Information;
