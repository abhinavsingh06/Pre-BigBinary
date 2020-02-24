import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Repos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/')
      .then((res) => setData(res.data.allRepos));
  }, []);

  return (
    <>
      <div>
        {data.map((item) => {
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
