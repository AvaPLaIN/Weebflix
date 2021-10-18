const router = require('express').Router();

//! IMPORT MIDDLEWARE
const { auth } = require('../middleware/auth');

//! IMPORT CONTROLLERS
const { signin, signup } = require('../controllers/user');

router.post('/signin', signin);
router.post('/signup', signup);
//TODO router.post('/signup', auth, signup);

module.exports = router;
