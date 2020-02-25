import React from 'react';

export default function Search({ search, setSearchData }) {
  return (
    <>
      <div className='input_container'>
        <input
          value={search}
          onChange={({ target: { value } }) => setSearchData(value)}
          className='search'
          type='text'
          placeholder='Find a repository...'></input>
      </div>
    </>
  );
}
