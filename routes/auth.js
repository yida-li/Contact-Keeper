const express = require('express');

const router = express.Router();

// @ route  get api/auth
// @desc   get logged in user
// @access Private
router.get('/', (req, res) => {
  res.send('Get looged in user');
});
// @ route  POST api/auth
// @desc  Auth user & get token
// @access Private
router.post('/', (req, res) => {
  res.send('Login in user');
});

module.exports = router;
