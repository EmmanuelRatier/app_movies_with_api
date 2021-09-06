import { useState } from 'react';
import Casts from './Casts'

const SingleContent = ({ id, poster, title }) => {
  const [fetchDetailsOnClick, setFetchDetailsOnClick] = useState(false)
  const [dataMovie, setDataMovie] = useState([])
  const [genreMovie, setGenreMovie] = useState([])
  const [credits, setCredits] = useState([])
  const bodyTag = document.getElementById('myBody')
  const footerTag = document.getElementById("myFooter")
  //function for get the id of a single movie and fetch details.
  const handleClick = () => {
    setFetchDetailsOnClick(!fetchDetailsOnClick)
    if (!fetchDetailsOnClick) {
      fetch(`http://api.themoviedb.org/3/movie/${id}?&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=fr-FR`)
        .then((res) => res.json())
        .then((data) => {
          setDataMovie(data)
          setGenreMovie(data.genres)
        })

      fetch(`http://api.themoviedb.org/3/movie/${id}/credits?&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=fr-FR`)
        .then((res) => res.json())
        .then((data) => {
          setCredits(data.cast)
          console.log(credits.cast)
        })

    }
  }
  if (window.innerWidth < 1400 && fetchDetailsOnClick) {
    //hide footer if < 1400 and click film image
    footerTag.style.visibility = 'hidden'
  } else if (window.innerWidth < 1400 && !fetchDetailsOnClick) {
    // display footer if < 1400 and no click on film image 
    footerTag.style.visibility = 'visible'
  }
  if (window.innerWidth < 500 && fetchDetailsOnClick) {
    bodyTag.style.overflow = 'hidden'
  } else if (fetchDetailsOnClick) {
    if (window.innerWidth > 500) {
      bodyTag.style.overflow = 'hidden'
    } else {
      bodyTag.style.overflow = 'visible'
    }
  } else if (!fetchDetailsOnClick) {
    bodyTag.style.overflow = 'visible'
    footerTag.style.position = 'inherit'
  }
  else {
    bodyTag.style.overflow = 'visible'
  }

  const IMG_API = `https://image.tmdb.org/t/p/w1280`
  return (
    <>
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
                <img src={IMG_API + poster} alt={title} className="img_poster_modal" />
              </div>
              <div className="title-modal">
                <h3>{dataMovie.title}</h3>
                <p>date de sortie: {dataMovie.release_date}</p>
                <p>genre: {genreMovie.map(genre => <strong className="space-genre">{genre.name}</strong>)}</p>
                <i>{dataMovie.tagline}</i>
                <p>Synopsis</p>
                <p>{dataMovie.overview}</p>
              </div>
              <div className='role_txt'><strong>Distribution des rôles:</strong></div>
              <div className="casts">
                {credits && credits.map((item, index) => (
                  <Casts
                    name={item.name}
                    poster={item.profile_path}
                    key={item.id}
                    id={item.id}
                    index={index}
                  />
                ))
                }
              </div>
            </div>
          </div>

        }
      </div >
    </>
  )
}

export default SingleContent