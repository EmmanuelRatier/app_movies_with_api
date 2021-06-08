import { useState } from 'react';

const SingleContent = ({ id, poster, title }) => {
  const [fetchDetailsOnClick, setFetchDetailsOnClick] = useState(false)
  const [dataMovie, setDataMovie] = useState([])
  const [genreMovie, setGenreMovie] = useState([])
  //function for get the id of a single movie and fetch details.
  const handleClick = () => {
    setFetchDetailsOnClick(!fetchDetailsOnClick)
    console.log(id)
    if (!fetchDetailsOnClick) {
      return fetch(`http://api.themoviedb.org/3/movie/${id}?&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=fr-FR`)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data.results[5].genre_ids)
          setDataMovie(data)
          setGenreMovie(data.genres)
          // console.log(data.overview)
        })
    }
  }
  // console.log(dataMovie)
  console.log(genreMovie)
  // condition for display div details (scrollbar)
  const elem = document.getElementById('myBody')
  if (fetchDetailsOnClick) {
    elem.style.overflow = 'hidden'
  } else {
    elem.style.overflow = 'visible'
  }

  const IMG_API = `https://image.tmdb.org/t/p/w1280`
  return (
    <div className="affiche_movie" id={id} onClick={handleClick}>
      <img src={IMG_API + poster} alt={title} className="img_poster" />
      <div className="movie-info">
        <p>{title}</p>
      </div>
      {
        fetchDetailsOnClick &&
        <div className='tasty'>
          <div className="modal">
            <div className="image-modal">
              <img src={IMG_API + poster} alt={title} className="img_poster" />
            </div>
            <div className="title-modal">
              <h3>{dataMovie.title}</h3>
              <p>date de sortie: {dataMovie.release_date}</p>
              {genreMovie.map(genre => <p>{genre.name}</p>)}
              <i>{dataMovie.tagline}</i>
            </div>
            <div className="synopsis-modal">
              <p>Synopsis</p>
              <p>{dataMovie.overview}</p>
            </div>
          </div>
        </div>
      }
    </div >
  )
}

export default SingleContent