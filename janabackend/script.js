require('dotenv').config();
const mongoose = require('mongoose');
const connectDb = require('./db/connect');
const Admin = require('./models/AdminModel');
const bcrypt = require('bcryptjs');

const createAdmin = async () => {
  await connectDb();

  const hashedPassword = await bcrypt.hash('jana00', 10);
  await Admin.create({ username: 'jana00', password: hashedPassword });
  console.log('✅ Admin created');
  process.exit(0);
};

createAdmin();