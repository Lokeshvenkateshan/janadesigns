const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

router.post('/', async (req, res) => {
  const { designName, designType, phone, email, message } = req.body;
  try {
    const newEnquiry = new Enquiry({ designName, designType, phone, email, message });
    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Try again.' });
  }
});
// to list cutomer
router.get('/', async (req, res) => {
  try {
    const all = await Enquiry.find().sort({ submittedAt: -1 });
    res.status(200).json(all);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch enquiries' });
  }
});

//to delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Enquiry.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router;
