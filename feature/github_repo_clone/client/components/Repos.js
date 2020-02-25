import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Repos({ searchData, filter }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/').then((res) => {
      setData(res.data.allRepos);
      setSearch(
        res.data.allRepos
          .filter((data) =>
            data.name.toLowerCase().includes(searchData.toLowerCase())
          )
          .filter((item) => {
            if (filter[0] === 'all') {
              return item;
            } else if (item.type === filter[0]) {
              return item;
            }
          })
          .filter((item) => {
            if (filter[1] === 'all') {
              return item;
            } else if (item.language === filter[1]) {
              return item;
            }
          })
      );
    });
  }, [searchData, filter]);

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
  filter: PropTypes.array,
};
