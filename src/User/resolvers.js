const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'mrRobot';

const GetUsers = async (_, __, { dataSources }) => {
  return await dataSources.User.find();
};

const GetUserById = async (_, { _id }, { dataSources }) => {
  try {
    return await dataSources.User.findOne({ _id });
  } catch (err) {
    return null;
  }
};

const SaveUser = async (_, { name, email, password }, { dataSources }) => {
  const hash = bcrypt.hashSync(password, 10);
  return await new dataSources.User({
    name,
    email,
    password: hash,
  }).save();
};

const Login = async (_, { email, password }, { dataSources }) => {
  try {
    const user = await dataSources.User.findOne({ email });
    const match = bcrypt.compare(password, user.password);
    user.token = jwt.sign({ _id: user._id }, secret);
    if (match) {
      return user;
    }
    return null;
  } catch (err) {
    return null;
  }
};

const ValidateToken = (_, { token }) => {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  userQueries: {
    getUsers: GetUsers,
    getUserById: GetUserById,
    validateToken: ValidateToken,
    login: Login,
  },
  userMutations: {
    saveUser: SaveUser,
  },
};
