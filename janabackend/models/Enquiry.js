const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  designName: { type: String, required: true },
  designType: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: {type:String, required: true},
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Enquiry', enquirySchema);
