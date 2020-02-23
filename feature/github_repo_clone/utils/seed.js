const Repo = require('../model/Repo');

Repo.find((err, repos) => {
  if (repos.length === 0) {
    console.log(repos);
    const repo = new Repo({
      name: 'intro to javascript',
      repoLanguage: 'JavaScript',
      language: 'JavaScript',
      type: 'Public',
    });
    repo.save();
  }
});
