const router = require('express').Router();

//! IMPORT MIDDLEWARE
const { auth } = require('../middleware/auth');

//! IMPORT CONTROLLERS
const {
  signin,
  signup,
  refreshTokens,
  updateUserProgress,
} = require('../controllers/user');

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/refreshTokens', refreshTokens);
router.post('/updateProgress', auth, updateUserProgress);
//TODO router.post('/signup', auth, signup);

module.exports = router;
