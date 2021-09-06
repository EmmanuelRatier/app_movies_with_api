import '../../index.css'
import InputDateYear from './../InputDateYear';
import InputGenre from './../InputGenre';
import Pagination from './../Pagination';
import { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../context/MovieContext'

export default function Navbar() {
  const { genre, setIdGenre, setDate, page, setPage } = useContext(MovieContext)
  const [toggleMenu, setToogleMenu] = useState(false)
  const [largeur, setLargeur] = useState(window.innerWidth)


  const navTest = document.querySelector('.nav-test')

  const toggleNavSmallScreen = () => {
    setToogleMenu(!toggleMenu)
    !toggleMenu ? navTest.style.marginBottom = 200 + 'px' : navTest.style.marginBottom = 0 + 'px'
  }

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth)
      if (window.innerWidth > 500) {
        setToogleMenu(false)
        navTest.style.marginBottom = 0 + 'px'
      }
    }
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  })
  return (
    <>
      <header>
        <h1>Movie app</h1>
      </header>
      <nav className="nav-test">
        {(toggleMenu || largeur > 500) && (
          <>
            <ul className='nav-ul'>
              <li className="items"><InputGenre genre={genre} setIdGenre={setIdGenre} /></li>
              <li className="items"><InputDateYear setDate={setDate} /></li>
              <li>
                <Pagination page={page} setPage={setPage} />
              </li>
            </ul>
          </>
        )}
        <button onClick={toggleNavSmallScreen} className="btn">BTN</button>
      </nav>
    </>
  )
}