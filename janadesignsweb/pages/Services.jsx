import React, { useEffect, useRef } from 'react';
import '../styles/services.css';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PuttaImg from '../images/putta.png';
import BorderImg from '../images/border.png';
import BodyImg from '../images/body.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Putta Design',
    image: PuttaImg,
    description: 'Detailed pixel patterns designed for body motifs and decorations on sarees.',
  },
  {
    title: 'Border Design',
    image: BorderImg,
    description: 'Intricate border art showcasing traditional and modern weaving styles.',
  },
  {
    title: 'Body Design',
    image: BodyImg,
    description: 'Complete body layout crafted to reflect elegance across the full saree length.',
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from('.book-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        
      },
    });
  }, []);

  return (
    <section className="services-section" id="designs-section" ref={sectionRef}>
      <h2 className="services-title">Our Design Services</h2>
      <div className="books-container">
        {services.map((service, idx) => (
          <div className="book-card" key={idx}>
            
            <motion.div
              className="book-cover"
              whileHover={{ rotateY: -120 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              
            >
              <img src={service.image} alt={service.title} />
              
              
            </motion.div>
            <div className="book-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;