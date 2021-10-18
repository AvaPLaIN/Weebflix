//! IMPORTS LIBRARIES
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//! IMPORT ROUTES
const animeRoute = require('./routes/animes');
const userRoutes = require('./routes/users');

//! SETUP
const PORT = process.env.PORT || 8800;
dotenv.config();
const app = express();

//! MIDDLEWARE
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({ origin: '*' }));

app.use('/api/animes', animeRoute);
app.use('/api/users', userRoutes);

//! MONGO_DB
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.m0luj.mongodb.net/weebflix?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log('Connection successfull!'))
  .catch((err) => console.error(err));

//! SERVER
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}!`);
});
