import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/admindash.css';
import NavBar from '../Component/NavBar';

const AdminDash = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [stats, setStats] = useState({
    designs: 0,
    enquiries: 0,
    types: {},
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const designRes = await fetch(`${serverURL}/designs`);
        const enquiryRes = await fetch(`${serverURL}/enquiries`);
        const designs = await designRes.json();
        const enquiries = await enquiryRes.json();

        const typeCount = {};
        designs.forEach(d => {
          typeCount[d.type] = (typeCount[d.type] || 0) + 1;
        });

        setStats({
          designs: designs.length,
          enquiries: enquiries.length,
          types: typeCount,
        });
      } catch (err) {
        console.error('Error loading stats:', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
    <NavBar/>
    <motion.div 
      className="admin-dashboard"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Welcome to Admin Dashboard</h1>
      <p className="subtitle">Manage all your designs and enquiries from one place.</p>

      <div className="dashboard-cards">
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Total Designs</h3>
          <p>{stats.designs}</p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Total Enquiries</h3>
          <p>{stats.enquiries}</p>
        </motion.div>

        <motion.div className="card types" whileHover={{ scale: 1.05 }}>
          <h3>Design Types</h3>
          <ul>
            {Object.entries(stats.types).map(([type, count]) => (
              <li key={type}>
                <strong>{type}:</strong> {count}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="quick-links">
        <Link to="/adddesign" className="link-btn">➕ Add New Design</Link>
        <Link to="/designlist" className="link-btn">📁 View All Designs</Link>
        <Link to="/enquiry" className="link-btn">📨 View All Enquiries</Link>
      </div>
    </motion.div>
    </>
  );
};

export default AdminDash;
