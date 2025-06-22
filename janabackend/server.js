const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const connectDb = require('./db/connect');
const designsRoute =require('./routes/designs.js');
const enquiryRoutes = require('./routes/enquiryRoutes.js');
const contactRoute = require('./routes/contact.js');
const adminRoutes = require('./routes/adminRoutes.js'); 

const app = express();
const port = process.env.PORT;

connectDb();
app.use(express.json());

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.use(
  session({
    secret: 'jana-designs-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, 
    },
  })
);

app.use('/designs', designsRoute);
app.use('/enquiries', enquiryRoutes);
app.use('/contact', contactRoute);

app.use('/admin', adminRoutes); //




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});