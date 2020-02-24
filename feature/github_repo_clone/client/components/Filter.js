import React from 'react';

export default function Filter() {
  return (
    <>
      <div className='filter_container'>
        <div className='type_filter_container'>
          <label htmlFor='type'>Type:</label>
          <select id='type'>
            <option value='All'>All</option>
            <option value='saab'>Saab</option>
            <option value='opel'>Opel</option>
            <option value='audi'>Audi</option>
          </select>
        </div>
        <div className='language_filter_container'>
          <label htmlFor='language'>Language:</label>
          <select id='language'>
            <option value='All'>All</option>
            <option value='saab'>Saab</option>
            <option value='opel'>Opel</option>
            <option value='audi'>Audi</option>
          </select>
        </div>
      </div>
    </>
  );
}
