import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Repos({ searchData }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/').then((res) => {
      setData(res.data.allRepos);
      setSearch(
        res.data.allRepos.filter((data) =>
          data.name.toLowerCase().includes(searchData.toLowerCase())
        )
      );
    });
  }, [searchData]);

  return (
    <>
      <div>
        {search.map((item) => {
          return (
            <div className='repo' key={item._id}>
              <h1>{item.name}</h1>
              <h3>{item.language}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

Repos.propsTypes = {
  searchData: PropTypes.string,
};
