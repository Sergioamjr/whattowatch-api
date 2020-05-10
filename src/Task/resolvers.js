const GetAllTasks = async (_, __, { dataSources }) => {
  return await dataSources.Task.find();
};

const GetTaskById = async (_, { _id }, { dataSources }) => {
  try {
    return await dataSources.Task.findOne({ _id });
  } catch (err) {
    return null;
  }
};

const SaveTask = async (_, { name, date, title }, { dataSources }) => {
  const params = {
    name,
    date,
    title,
  };
  return await new dataSources.Task(params).save();
};

module.exports = {
  GetAllTasks,
  GetTaskById,
  SaveTask,
};
