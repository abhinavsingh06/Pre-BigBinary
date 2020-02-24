import React, { useState } from 'react';
import Search from './Search';
import Filter from './Filter';
import Repos from './Repos';

export default function GithubContent() {
  const [searchData, setSearchData] = useState('');
  return (
    <>
      <div className='github_content'>
        <div className='github_content_container'>
          <Search search={searchData} setSearchData={setSearchData} />
          <Filter />
        </div>
      </div>
      <div className='repo_container'>
        <Repos searchData={searchData} />
      </div>
    </>
  );
}
