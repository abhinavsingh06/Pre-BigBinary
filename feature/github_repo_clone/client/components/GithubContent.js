import React from 'react';
import Search from './Search';
import Filter from './Filter';

export default function GithubContent() {
  return (
    <>
      <div className='github_content_container'>
        <Search />
        <Filter />
      </div>
    </>
  );
}
