import React, { useEffect } from 'react';
import SingleContent from './SingleContent';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import Pagination from '../components/Pagination';


const Main = () => {
  const { setGenre, data, setData, idGenre, date, page, setPage } = useContext(MovieContext)
  // fetch movies
  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/discover/movie/?&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}&sort_by=popularity.desc&year=${date}&with_genres=${idGenre}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results)
        //console.log(data.results[5].genre_ids)
        console.log(data)
      })

  }, [date, idGenre, page, setData])

  // Fetch genre name and id in select option 
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then((res) => res.json())
      .then((genre) => {
        setGenre(genre.genres)
      })
  }, [setGenre])


  return (
    <>
      <Navbar />
      <div className="center-container">
        <div className="container">
          {data && data.map(item => (
            <SingleContent
              title={item.title}
              poster={item.poster_path}
              key={item.id}
              id={item.id}
            />
          ))
          }
        </div>
      </div>
      <Pagination page={page} setPage={setPage} />
      <Footer />
    </>
  )
}

export default Main