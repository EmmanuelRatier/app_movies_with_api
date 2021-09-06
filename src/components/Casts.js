// import { useState } from 'react';

const Casts = ({ id, poster, name }) => {

  const IMG_APII = `https://image.tmdb.org/t/p/w276_and_h350_face/`
  return (
    <>
      <div className="flex">
        <ol>
          <li className='card'>
            <img src={IMG_APII + poster} className='img_casts' alt="portait_casting" />
            <p className='name_cast'>{name}</p>
          </li>
        </ol>
      </div>
    </>
  )
}

export default Casts