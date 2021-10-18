const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Anime = require('../models/Anime');

const addAnime = async (req, res) => {
  const newAnime = new Anime(req.body);
  try {
    const savedAnime = await newAnime.save();
    res.status(201).json(savedAnime);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findById = async (req, res) => {
  if (!req.userId) return res.json({ message: 'Unauthenticated' });
  try {
    const anime = await Anime.findById(req.params.id);
    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findByGenre = async (req, res) => {
  if (!req.userId) return res.json({ message: 'Unauthenticated' });
  try {
    const animesByGenre = await Anime.aggregate([
      { $match: { genres: req.params.genre } },
      { $sample: { size: 30 } },
    ]);
    res.status(200).json(animesByGenre);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findByName = async (req, res) => {
  if (!req.userId) return res.json({ message: 'Unauthenticated' });
  try {
    const animesByTitle = await Anime.find({
      title: { $regex: new RegExp(`.*${req.params.title}.*`), $options: 'i' },
    });
    res.status(200).json(animesByTitle);
  } catch (error) {
    res.status(500).json(error);
  }
};

const random = async (req, res) => {
  if (!req.userId) return res.json({ message: 'Unauthenticated' });
  try {
    const anime = await Anime.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json(error);
  }
};

const all = async (req, res) => {
  if (!req.userId) return res.json({ message: 'Unauthenticated' });
  try {
    const animes = await Anime.find();
    res.status(200).json(animes);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { findById, findByGenre, findByName, random, all };
