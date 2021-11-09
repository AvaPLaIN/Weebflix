const router = require('express').Router();

//! IMPORT MIDDLEWARE
const { auth } = require('../middleware/auth');

//! IMPORT CONTROLLERS
const {
  signin,
  signup,
  refreshTokens,
  updateUserProgress,
  checkUserAuth,
} = require('../controllers/user');

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/refreshTokens', refreshTokens);
router.post('/updateProgress', auth, updateUserProgress);
router.post('/refreshUser', checkUserAuth);

module.exports = router;
