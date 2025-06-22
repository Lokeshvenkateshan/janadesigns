import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../Component/NavBar';
import { motion } from 'framer-motion';
import '../styles/upload.css';

const Upload = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [form, setForm] = useState({ type: '', name: '', info: '' });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async () => {
    if (!form.type || !form.name || !form.info || !file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        setLoading(true);
        await axios.post(`${serverURL}/designs`, {
          ...form,
          image: reader.result
        });
        alert('uploaded successfully');
        setForm({ type: '', name: '', info: '' });
        setFile(null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <>
      <NavBar />
      <motion.div 
        className="upload-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="upload-container">
          <h2>Upload Design</h2>
          <input
            type="text"
            name="type"
            placeholder="Type (Putta, Body, Border)"
            value={form.type}
            onChange={handleChange}
          />

          <input
            type="text"
            name="name"
            placeholder="Design Name"
            value={form.name}
            onChange={handleChange}
          />

          <textarea
            name="info"
            placeholder="Design Info"
            value={form.info}
            onChange={handleChange}
            rows="4"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Upload;
