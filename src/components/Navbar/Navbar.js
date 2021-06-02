import './Navbar.css'
import InputDateYear from './../InputDateYear';
import InputGenre from './../InputGenre';
import Pagination from './../Pagination';
import { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../context/MovieContext'

export default function Navbar() {
  const { genre, setIdGenre, setDate, page, setPage } = useContext(MovieContext)
  const [toggleMenu, setToogleMenu] = useState(false)
  const [largeur, setLargeur] = useState(window.innerWidth)

  const toggleNavSmallScreen = () => {
    setToogleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth)
      if (window.innerWidth > 500) {
        setToogleMenu(false)
      }
    }
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  })
  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items"> <Pagination page={page} setPage={setPage} /></li>
          <li className="items"><InputGenre genre={genre} setIdGenre={setIdGenre} /></li>
          <li className="items"><InputDateYear setDate={setDate} /></li>
        </ul>
      )}
      <button onClick={toggleNavSmallScreen} className="btn">BTN</button>
    </nav>
  )
}