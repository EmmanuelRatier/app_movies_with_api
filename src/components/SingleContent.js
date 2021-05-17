const SingleContent = ({
  id,
  poster,
  title
}) => {
  const IMG_API = `https://image.tmdb.org/t/p/w1280`
  return (
    <div className="affiche_movie">
      <img src={IMG_API + poster} alt={title} className="img_poster" />
      <div className="movie-info">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default SingleContent