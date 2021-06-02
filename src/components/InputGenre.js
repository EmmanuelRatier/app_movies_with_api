//import React, { useState } from 'react';
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const InputGenre = () => {
  const { genre, setIdGenre } = useContext(MovieContext)
  const handleChange = (e) => {
    setIdGenre(e.target.value)
  }
  return (
    <>
      <select onChange={handleChange}>
        <option value="">Tous</option>
        {genre && genre.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
    </>
  )
}

export default InputGenre