import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Jana Designs</h3>
          <p>Crafting timeless silk saree designs with passion and precision.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#section-services">Services</a></li>
            <li><a href="#section-catalogue">Catalogue</a></li>
            <li><a href="#section-flagship">Flagship Works</a></li>
            <li><a href="#section-contact">Contact</a></li>
            
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com/janadesigns" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com/janadesigns" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/janadesigns" target="_blank" rel="noreferrer"><FaTwitter /></a>
            {/* <a href="https://linkedin.com/company/janadesigns" target="_blank" rel="noreferrer"><FaLinkedinIn /></a> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jana Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
