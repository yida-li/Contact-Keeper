const express = require('express');

const router = express.Router();

// @route  get api/users
// @desc   Get all users contacts
// @access Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route  Post api/users
// @desc   Add new contacts
// @access Private
router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route  Put api/contacts/:id
// @desc   Update contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route  Delete api/contacts/:id
// @desc   Delete contacts
// @access Private
router.put('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
