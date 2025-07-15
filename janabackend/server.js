/* const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const connectDb = require('./db/connect');
const designsRoute =require('./routes/designs.js');
const enquiryRoutes = require('./routes/enquiryRoutes.js');
const contactRoute = require('./routes/contact.js');
const adminRoutes = require('./routes/adminRoutes.js'); 

const app = express();
const port = process.env.PORT || 5001;

connectDb();
app.use(express.json());

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://janadesigns.vercel.app', 'https://janadesigns-admin.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
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
}); */

const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const connectDb = require('./db/connect');

const designsRoute = require('./routes/designs.js');
const enquiryRoutes = require('./routes/enquiryRoutes.js');
const contactRoute = require('./routes/contact.js');
const adminRoutes = require('./routes/adminRoutes.js');

const app = express();
const port = process.env.PORT || 5001;

connectDb();

app.use(express.json());


const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://janadesigns.vercel.app',
  'https://janadesigns-admin.vercel.app',
];


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));


app.options('*', cors());

app.use(session({
  secret: 'jana-designs-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // ⬅️ only true in production
    httpOnly: true,
    sameSite: 'none', // ⬅️ allow cross-site cookies
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  },
}));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/designs', designsRoute);
app.use('/enquiries', enquiryRoutes);
app.use('/contact', contactRoute);
app.use('/admin', adminRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
