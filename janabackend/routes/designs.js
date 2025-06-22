const express = require('express');

const Design = require('../models/DesignModel.js');

const router = express.Router();

router.post('/', async (req, res) => {
  const { type, name, info, image } = req.body;

  if (!type || !name || !info || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newDesign = new Design({ type, name, info, image });
    await newDesign.save();
    res.status(201).json({ message: 'Design saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save design', details: err.message });
  }
});

// Get all designs
router.get('/', async (req, res) => {
  try {
    const designs = await Design.find();
    res.status(200).json(designs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch designs' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) return res.status(404).json({ message: 'Design not found' });
    res.json(design);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching design' });
  }
});

// DELETE design by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Design.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Design not found' });
    }
    res.status(200).json({ message: 'Design deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error while deleting design' });
  }
});

module.exports = router;
