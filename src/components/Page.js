import React, { useState, useEffect } from 'react';
import SingleContent from './SingleContent';
import InputDateYear from './InputDateYear';
import InputGenre from './InputGenre';

const Page = () => {
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([])
  const [date, setDate] = useState("")

  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/discover/movie/?&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&sort_by=popularity.desc&year=${date}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results)
        console.log(data.results[5].genre_ids)
        console.log(data)
      })

  }, [date])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then((res) => res.json())
      .then((genre) => {
        setGenre(genre.genres)
        console.log(genre)
      })
  }, [])


  return (
    <>
      <div className="ctr">
        <InputGenre genre={genre} setGenre={setGenre} />
        <InputDateYear setDate={setDate} />
      </div>
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
    </>
  )
}

export default Page