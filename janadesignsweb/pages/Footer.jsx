import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Jana Designs</h3>
          <p>Crafting timeless silk saree designs with passion and precision.</p>
          <br />
          <p><strong>Address :</strong> Tamilarukalaga Street, Kondalampatty, Salem-636010</p>
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
          <h4>Contact</h4>
          <div className="social-icons">
            <a href="tel:+919500207092" aria-label="Call Jana Designs" title="Call Jana Designs"><FaPhoneAlt /></a>
            <a href="https://facebook.com/janadesigns" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/jana.j.arts?igsh=MXN6OXM0NDhwdzdrMw==https://instagram.com/janadesigns" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com/janadesigns" target="_blank" rel="noreferrer" aria-label="X" title="X"><FaTwitter /></a>
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
