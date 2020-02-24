const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoSchema = new Schema({
  name: { type: String, required: true },
  repoLanguage: { type: String, required: true },
  repoType: { type: String, required: true },
  language: {
    type: String,
    required: true,
    enum: ['css', 'elixir', 'html', 'javascript', 'objective-c'],
  },
  type: {
    type: String,
    required: true,
    enum: [
      'public',
      'private',
      'internal',
      'sources',
      'forks',
      'archived',
      'mirrors',
    ],
  },
});

const Repo = mongoose.model('Repo', repoSchema);
module.exports = Repo;
