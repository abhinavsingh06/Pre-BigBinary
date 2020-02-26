import React, { useState } from 'react';
import Search from './Search';
import Filter from './Filter';
import Repos from './Repos';

export default function GithubContent() {
  const [searchData, setSearchData] = useState('');
  const [filterData, setFilterData] = useState(['all', 'all']);
  return (
    <>
      <div className='github_content'>
        <div className='github_content_container'>
          <Search search={searchData} setSearchData={setSearchData} />
          <Filter filter={filterData} setFilter={setFilterData} />
        </div>
      </div>
      <div className='repo_container'>
        <Repos
          filter={filterData}
          searchData={searchData}
          setSearchData={setSearchData}
          setFilterData={setFilterData}
        />
      </div>
    </>
  );
}
