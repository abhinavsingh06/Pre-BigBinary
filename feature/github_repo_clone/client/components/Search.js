import React from 'react';

export default function Search() {
  return (
    <>
      <div className='input_container'>
        <input
          className='search'
          type='text'
          placeholder='Find a repository...'></input>
      </div>
    </>
  );
}
