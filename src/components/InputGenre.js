//import React, { useState } from 'react';

const InputGenre = ({ genre, setIdGenre }) => {
  const handleChange = (e) => {
    setIdGenre(e.target.value)
    console.log(e.target.value)
  }
  return (
    <>
      <div>
        <select onChange={handleChange}>
          <option value="">Tous</option>
          {genre && genre.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default InputGenre