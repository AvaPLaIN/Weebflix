const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema(
  {
    title: { type: String },
    banner: { type: String },
    thumnail: { type: String },
    logo: { type: String },
    trailer: { type: String },
    genres: { type: Array },
    released: { type: String },
    status: { type: String },
    description: { type: String },
    episodes: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Anime', AnimeSchema);
