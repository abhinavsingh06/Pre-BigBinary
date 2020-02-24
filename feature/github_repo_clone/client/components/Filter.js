import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Filter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/').then((res) => {
      setData(res.data.allRepos);
    });
  }, []);

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
