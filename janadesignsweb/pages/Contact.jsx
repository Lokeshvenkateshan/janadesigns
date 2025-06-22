import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../styles/contact.css';

const Contact = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${serverURL}/contact`, form);
      if (res.data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <motion.div 
      className="contact-section"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='contact-title'>Contact Us</h2>
      <p>We’d love to hear from you. Reach out for collaborations, custom designs, or queries.</p>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input type="email" name="email" placeholder="Your Email" required
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <input type="text" name="subject" placeholder="Subject" required
            value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
          <textarea name="message" placeholder="Message" rows="5" required
            value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="contact-btn">
            Send Message
          </motion.button>
          
          {error && <div className="form-error">{error}</div>}
        </form>
      ) : (
        <motion.div 
          className="thank-you"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Thank you!</h3>
          <p>Your message has been sent successfully.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Contact;
