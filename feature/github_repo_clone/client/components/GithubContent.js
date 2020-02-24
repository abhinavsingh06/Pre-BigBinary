import React from 'react';
import Search from './Search';
import Filter from './Filter';
import Repos from './Repos';

export default function GithubContent() {
  return (
    <>
      <div className='github_content'>
        <div className='github_content_container'>
          <Search />
          <Filter />
        </div>
      </div>
      <div className='repo_container'>
        <Repos />
      </div>
    </>
  );
}
