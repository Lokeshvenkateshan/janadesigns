/* import React, { useEffect, useRef } from 'react';
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

export default Services; */




import React, { useEffect, useRef, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

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

  const handleCardClick = (index) => {
    if (isMobile && cardRefs.current[index]) {
      gsap.fromTo(
        cardRefs.current[index],
        { rotationY: 0 },
        {
          rotationY: -120,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            // Optional: reset back
            gsap.to(cardRefs.current[index], {
              rotationY: 0,
              duration: 0.5,
              delay: 1.5,
              ease: 'power2.out',
            });
          },
        }
      );
    }
  };

  return (
    <section className="services-section" id="designs-section" ref={sectionRef}>
      <h2 className="services-title">Our Design Services</h2>
      <div className="books-container">
        {services.map((service, idx) => (
          <div
            className="book-card"
            key={idx}
            onClick={() => handleCardClick(idx)}
          >
            <motion.div
              className="book-cover"
              whileHover={isMobile ? {} : { rotateY: -120 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              ref={(el) => (cardRefs.current[idx] = el)}
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
