import React, { useState, useEffect } from 'react';
import SingleContent from './SingleContent';

const Movie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie/?&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0].id)
        setData(data.results)
      })
  }, [])
  return (
    <div className="container">
      {data && data.map(item => (
        <SingleContent
          title={item.title}
          poster={item.poster_path}
          key={item.id}
        />
      ))
      }
    </div>
  )
}

export default Movie