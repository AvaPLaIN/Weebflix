const router = require('express').Router();

//! IMPORT MIDDLEWARE
const { auth } = require('../middleware/auth');

//! IMPORT CONTROLLERS
const { addMovie, getMovies } = require('../controllers/movie');

router.post('/addMovie', addMovie);
router.get('/getMovies', auth, getMovies);

module.exports = router;
