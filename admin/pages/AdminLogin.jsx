import React, { useState } from 'react';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/adminlogin.css'; 

const AdminLogin = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverURL}/admin/login`, form, {
        withCredentials: true,
      });
      sessionStorage.setItem('admin', JSON.stringify(res.data.admin));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Jana Designs - Admin</h2>
        <form className="admin-login-form" onSubmit={handleSubmit}>
          <label className="admin-login-field">
            <FaUserCircle className="admin-icon" />
            <input
              type="text"
              placeholder="Admin Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </label>

          <label className="admin-login-field">
            <FaLock className="admin-icon" />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </label>

          <div className="admin-login-links">
            {/* Optional link for reset */}
            {/* <Link to="/reset-pass">Reset Password</Link> */}
          </div>

          <button type="submit" className="admin-login-button">
            Login
          </button>

          {error && <p className="login-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
