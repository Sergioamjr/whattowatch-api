const mongoose = require('mongoose');
const joigoose = require('joigoose')(mongoose);
const joi = require('@hapi/joi');

const taskSchema = joi.object({
  name: joi.string().required(),
  date: joi.date().required(),
  title: joi.string().required(),
  description: joi.string().default(''),
  period: joi.string().valid('DAILY', 'MONTHLY', 'WEEKLY', 'YEARLY'),
  goal: joi.number().default(0),
  color: joi.string().default('#333'),
  progress: joi.array().items(joi.number()).meta({ index: true }),
  notes: joi.array().items(joi.string()).meta({ index: true }),
});

const mongooseSchema = new mongoose.Schema(joigoose.convert(taskSchema));

const Task = mongoose.model('Task', mongooseSchema);

module.exports = {
  Task,
  taskSchema,
};
