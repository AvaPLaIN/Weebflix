const router = require('express').Router();

//! IMPORT CONTROLLERS
const { isTokenValid } = require('../controllers/auth');

router.post('/isTokenValid', isTokenValid);

module.exports = router;
