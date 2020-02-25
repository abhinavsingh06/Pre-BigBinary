const Repo = require('../model/Repo');

Repo.find((err, repos) => {
  if (repos.length === 0) {
    const reposToCreate = [
      {
        name: 'intro to javascript',
        repoLanguage: 'javascript',
        repoType: 'public',
        language: 'javascript',
        type: 'public',
      },
      {
        name: 'Objects',
        repoLanguage: 'objective-c',
        repoType: 'private',
        language: 'objective-c',
        type: 'private',
      },
      {
        name: 'Classes',
        repoLanguage: 'javascript',
        repoType: 'private',
        language: 'javascript',
        type: 'private',
      },
      {
        name: 'CSS variables',
        repoLanguage: 'css',
        repoType: 'public',
        language: 'css',
        type: 'public',
      },
      {
        name: 'Elixir beginners guide',
        repoLanguage: 'elixir',
        repoType: 'private',
        language: 'elixir',
        type: 'private',
      },
      {
        name: 'HTML 5 basics',
        repoLanguage: 'html',
        repoType: 'public',
        language: 'html',
        type: 'public',
      },
      {
        name: 'javascript array methods',
        repoLanguage: 'javascript',
        repoType: 'public',
        language: 'javascript',
        type: 'public',
      },
      {
        name: 'higher order functions ',
        repoLanguage: 'javascript',
        repoType: 'public',
        language: 'javascript',
        type: 'public',
      },
      {
        name: 'react',
        repoLanguage: 'javascript',
        repoType: 'public',
        language: 'javascript',
        type: 'public',
      },
    ];
    reposToCreate.forEach((repo) => {
      const repoToCreate = new Repo(repo);
      repoToCreate.save();
    });
  }
});
