const mongoose = require('mongoose');
const joigoose = require('joigoose')(mongoose);
const joi = require('@hapi/joi');

const favoriteSchema = joi.object({
  userID: joi.string().required(),
  movieID: joi.string().required(),
  overview: joi.string().required(),
  popularity: joi.number().required(),
  title: joi.string().required(),
  posterPath: joi.string().required(),
  backdropPath: joi.string().required(),
  release: joi.date().required(),
  genre: joi.array().items(joi.number()),
});

const mongooseSchema = new mongoose.Schema(joigoose.convert(favoriteSchema));

const Favorite = mongoose.model('Favorite', mongooseSchema);

module.exports = {
  Favorite,
  favoriteSchema,
};
