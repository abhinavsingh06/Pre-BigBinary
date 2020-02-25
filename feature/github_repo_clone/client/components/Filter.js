import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Filter({ filter, setFilter }) {
  const [type, setType] = useState([
    'all',
    'public',
    'private',
    'internal',
    'sources',
    'forks',
    'archived',
    'mirrors',
  ]);
  const [language, setLanguage] = useState([
    'all',
    'css',
    'elixir',
    'html',
    'javascript',
    'objective-c',
  ]);

  return (
    <>
      <div className='filter_container'>
        <div className='type_filter_container'>
          <label htmlFor='type'>Type:</label>
          <select
            onChange={({ target: { value } }) => setFilter([value, filter[1]])}
            id='type'>
            {type.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className='language_filter_container'>
          <label htmlFor='language'>Language:</label>
          <select
            onChange={({ target: { value } }) => setFilter([filter[0], value])}
            id='language'>
            {language.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
