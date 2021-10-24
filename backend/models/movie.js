const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String },
    banner: { type: String },
    movies: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', MovieSchema);
