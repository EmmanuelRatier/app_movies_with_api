import React, { useEffect } from 'react';
import SingleContent from './SingleContent';
import Navbar from './Navbar/Navbar'
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'


const Main = () => {
  const { setGenre, data, setData, idGenre, date, page } = useContext(MovieContext)
  // const [data, setData] = useState([]);
  // const [genre, setGenre] = useState([])
  // const [idGenre, setIdGenre] = useState("")
  // const [date, setDate] = useState("")
  // const [page, setPage] = useState(1)

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

export default Main