const mongoose = require('mongoose');
const joigoose = require('joigoose')(mongoose);
const joi = require('@hapi/joi');

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

const mongooseSchema = new mongoose.Schema(joigoose.convert(userSchema));

const User = mongoose.model('User', mongooseSchema);

module.exports = {
  User,
  userSchema,
};
