import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const Pagination = () => {
  let { setPage, page } = useContext(MovieContext)
  // const [isDisa, setIsDisa] = useState(true)

  //  buggg a revoir 
  // function pagePrev() {
  //   setPage(page -= 1)
  //   if (page === 1) {
  //     setIsDisa(isDisa)
  //   } else {
  //     setIsDisa(!isDisa)
  //   }
  // }
  // function pageNext() {
  //   setPage(page += 1)
  //   if (page > 1) {
  //     setIsDisa(!isDisa)
  //   }
  // }
  // oui le bug
  return (
    <>
      <div className="btn-wrap">
        <div><button
          id="btnPrev"
          // className={isDisa ? 'disa' : 'ena'}
          onClick={() => { setPage(page -= 1) }}
          disabled={page === 1 || page === 500}
          style={{ textDecoration: page === 1 ? 'line-through' : 'none' }}
        >
          Précédent
        </button>
        </div>
        <div><button id="btnNext" onClick={() => { setPage(page += 1) }}>Suivant</button></div>
        <p>page:{page}</p>
      </div>
    </>
  )
}

export default Pagination