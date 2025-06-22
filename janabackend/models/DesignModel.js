const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  info: { type: String, required: true },
  image: { type: String, required: true } 
}, { timestamps: true });

const Design = mongoose.model('Design', designSchema);
module.exports = Design; 
