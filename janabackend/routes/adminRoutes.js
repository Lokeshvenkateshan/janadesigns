const express = require('express');
const bcrypt = require('bcryptjs');
const Admin = require('../models/AdminModel');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    req.session.adminId = admin._id;
    res.json({ message: 'Login successful', admin: { username: admin.username } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out' });
  });
});

/* router.get('/check', (req, res) => {
  if (req.session.adminId) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
});
 */
module.exports = router;
