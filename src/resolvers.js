const { GetUsers, SaveUser, GetUserById } = require('./User/resolvers');

const Query = {
  getUsers: GetUsers,
  getUserById: GetUserById,
};

const Mutation = {
  saveUser: SaveUser,
};

module.exports = {
  Query,
  Mutation,
};
