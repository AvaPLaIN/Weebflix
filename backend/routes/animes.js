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
  progress,
  updateProgress,
} = require('../controllers/anime');

router.get('/findById/:id', auth, findById);
router.get('/findByGenre/:genre', auth, findByGenre);
router.get('/findByName/:title', auth, findByName);
router.get('/random', auth, random);
router.get('/all', auth, all);
router.post('/progress', auth, progress);
router.post('/updateProgress', auth, updateProgress);

module.exports = router;
