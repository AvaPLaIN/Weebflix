const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Movie = require('../models/movie');

const addMovie = async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getMovies = async (req, res) => {
  if (!req.userId) return res.json({ message: 'Unauthenticated' });
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addMovie,
  getMovies,
};
