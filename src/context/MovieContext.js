import { useState, createContext } from "react"

// créer et exporter ("named") FilterContext object
export const MovieContext = createContext()

/* le component-provider qui embrassera la partie de notre app où on utilise ce context */
export const MovieContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([])
  const [idGenre, setIdGenre] = useState('')
  const [date, setDate] = useState('')
  const [page, setPage] = useState(1)

  return (
    <MovieContext.Provider value={{
      data, setData, genre,
      setGenre, idGenre, setIdGenre,
      date, setDate, page, setPage
    }}>
      {children}
    </MovieContext.Provider>
  )
}