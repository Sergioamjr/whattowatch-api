const mongoose = require('mongoose');
const localDB = 'mongodb://localhost/staysanedb-graphql';

const url =
  'mongodb://heroku_gcq1q03h:mg1opbf4if2hoddfeqs5eabh1h@ds231549.mlab.com:31549/heroku_gcq1q03h' ||
  localDB;

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
