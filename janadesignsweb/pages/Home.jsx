import React, { useEffect, useRef } from "react";
import NavBar from "../NavbarComponent/NavBar";
import DesignImg from "../images/saree_logo-removebg-preview.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/home.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const elements = [
      titleRef.current,
      subtitleRef.current,
      aboutRef.current,
      ctaRef.current,
    ];

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });

    gsap.to(imageRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 3,
    });
  }, []);

  return (
    < >
      <section className="home-section">
        <div className="home-wrapper">
          <div className="home-left">
            <h1 ref={titleRef}>Hi, Welcome to Jana Designs</h1>
            <h2 ref={subtitleRef}>Elegant Silk Saree Artwork</h2>
            <p ref={aboutRef}>
              Designed by <strong>Janarthanan</strong>, a specialist in
              pixel-art silk saree designs with 5+ years of expertise. Each
              creation is meticulously made for weaving — tradition meets
              creativity.
            </p>
            
              <a href="#section-services"><button className="home-btn"><span> Explore</span> </button> </a>
            
          </div>
          <div className="home-right" ref={imageRef}>
            <div className="image-wrapper">
              <img
                src={DesignImg}
                alt="Silk Saree Design Preview"
                className="textile-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
