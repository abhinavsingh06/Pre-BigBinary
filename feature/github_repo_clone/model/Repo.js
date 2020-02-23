const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoSchema = new Schema({
  name: { type: String, required: true },
  repoLanguage: { type: String, required: true },
  language: {
    type: String,
    required: true,
    enum: ['All', 'CSS', 'Elixir', 'HTML', 'JavaScript', 'Objective-C'],
  },
  type: {
    type: String,
    required: true,
    enum: [
      'All',
      'Public',
      'Private',
      'Internal',
      'Sources',
      'Forks',
      'Archived',
      'Mirrors',
    ],
  },
});

const Repo = mongoose.model('Repo', repoSchema);
module.exports = Repo;
