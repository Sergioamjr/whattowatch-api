const { gql } = require('apollo-server');

const types = gql`
  type ProgressObject {
    progress: Int
    _id: String
  }

  type NotesObject {
    notes: Int
    _id: String
  }

  type Task {
    _id: ID
    date: String
    name: String
    title: String
    description: String
    period: String
    goal: Int
    color: String
    progress: [ProgressObject]
    notes: [NotesObject]
  }

  extend type Query {
    getTasks: [Task]
    getTaskById(_id: String): Task
  }
`;

module.exports = types;

// const taskSchema = joi.object({
//     name: joi.string().required(),
//     date: joi.date().required(),
//     title: joi.string().required(),
//     description: joi.string().default(''),
//     period: joi.string().valid('DAILY', 'MONTHLY', 'WEEKLY', 'YEARLY'),
//     goal: joi.number().default(0),
//     color: joi.string().default('#333'),
//     progress: joi.array().items(joi.number()).meta({ index: true }),
//     notes: joi.array().items(joi.string()).meta({ index: true }),
//   });
