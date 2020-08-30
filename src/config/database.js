const mongoose = require('mongoose');
const localDB = 'mongodb://localhost/whattowatch-db';

const url = process.env.MONGODB_URI || localDB;

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
