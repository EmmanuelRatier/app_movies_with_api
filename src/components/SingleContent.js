import { useState } from 'react';

const SingleContent = ({ id, poster, title }) => {
  const [fetchDetailsOnClick, setFetchDetailsOnClick] = useState(false)

  const handleClick = () => {
    setFetchDetailsOnClick(!fetchDetailsOnClick)
    console.log(id)
    if (!fetchDetailsOnClick) {
      return fetch(`http://api.themoviedb.org/3/movie/${id}?&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=fr-FR`)
        .then((res) => res.json())
        .then((okdata) => {
          //console.log(data.results[5].genre_ids)
          console.log(okdata)
        })
    }
  }

  const IMG_API = `https://image.tmdb.org/t/p/w1280`
  return (
    <div className="affiche_movie" onClick={handleClick}>
      <img src={IMG_API + poster} alt={title} className="img_poster" />
      <div className="movie-info">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default SingleContent