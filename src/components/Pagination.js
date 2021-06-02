import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const Pagination = () => {
  let { setPage, page } = useContext(MovieContext)

  return (
    <>
      <div className="flex">
        <div>< button onClick={() => { setPage(page -= 1) }} style={{ visibility: page === 1 ? 'hidden' : 'visible' }}>Précédent</button></div>
        <div><button onClick={() => { setPage(page += 1) }} style={{ visibility: page === 500 ? 'hidden' : 'visible' }}>Suivant</button></div>
        <div>page:{page}</div>
      </div>
    </>
  )
}

export default Pagination