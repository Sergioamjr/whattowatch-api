const { GetUsers, SaveUser, GetUserById } = require('./User/resolvers');
const { GetAllTasks, GetTaskById, SaveTask } = require('./Task/resolvers');
const { GetAllMovies, SaveMovie } = require('./Movie/resolvers');

const Query = {
  getUsers: GetUsers,
  getUserById: GetUserById,
  getTasks: GetAllTasks,
  getTaskById: GetTaskById,
  getMovies: GetAllMovies,
};

const Mutation = {
  saveUser: SaveUser,
  saveTask: SaveTask,
  saveMovie: SaveMovie,
};

module.exports = {
  Query,
  Mutation,
};
