const router = require('express').Router();

//! IMPORT MIDDLEWARE
const { auth } = require('../middleware/auth');

//! IMPORT CONTROLLERS
const {
  findById,
  findByGenre,
  findByName,
  random,
  all,
} = require('../controllers/anime');

router.get('/findById/:id', auth, findById);
router.get('/findByGenre/:genre', auth, findByGenre);
router.get('/findByName/:title', auth, findByName);
router.get('/random', auth, random);
router.get('/all', auth, all);

module.exports = router;
