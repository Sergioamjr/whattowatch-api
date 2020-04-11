const { GetUsers, SaveUser, GetUserById } = require('./User/resolvers');
const { GetAllTasks, GetTaskById } = require('./Task/resolvers');

const Query = {
  getUsers: GetUsers,
  getUserById: GetUserById,
  getTasks: GetAllTasks,
  getTaskById: GetTaskById,
};

const Mutation = {
  saveUser: SaveUser,
};

module.exports = {
  Query,
  Mutation,
};
