const express = require('express');
const router = express.Router();
const auth = require('../../controller/auth');
const User = require('../../models/User');

// @route GET api/users
// @desc Test route
// @access Public
router.get('/', auth, async (req, res) => {
  try {
    // @Note: -password means it don't send back password
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    Console.error(err.message);
    res.status(500).send('Server error!');
  }
});

module.exports = router;
