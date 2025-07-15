/* import React from 'react';
import { motion } from 'framer-motion';
import '../styles/flagshipworkmodule.css'

const flagshipVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
};

const FlagshipWorkItem = ({ image, title, description, isLeft }) => (
  <motion.div
    className="flagship-item"
    initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1 }}
    variants={flagshipVariants}
  >
    <div className="flagship-image-container">
      <img src={image} alt={title} className="flagship-image" />
    </div>
    <div className="flagship-text">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </motion.div>
);

const FlagshipWorkmodule = ({ works }) => {
  return (
    <section className="flagship-section">
      {works.map((work, index) => (
        <FlagshipWorkItem
          key={index}
          image={work.image}
          title={work.title}
          description={work.description}
          isLeft={index % 2 === 0} 
        />
      ))}
    </section>
  );
};

export default FlagshipWorkmodule;
 */


import React from 'react';
import { motion } from 'framer-motion';
import '../styles/flagshipworkmodule.css';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
};

const textVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const FlagshipWorkItem = ({ image, title, description, isLeft }) => (
  <div className="flagship-item">
    <motion.div
      className="flagship-image-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={imageVariants}
    >
      <img src={image} alt={title} className="flagship-image" />
    </motion.div>

    <motion.div
      className="flagship-text"
      initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={textVariants}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  </div>
);

const FlagshipWorkModule = ({ works }) => {
  return (
    <section className="flagship-section">
      {works.map((work, index) => (
        <FlagshipWorkItem
          key={index}
          image={work.image}
          title={work.title}
          description={work.description}
          isLeft={index % 2 === 0}
        />
      ))}
    </section>
  );
};

export default FlagshipWorkModule;
