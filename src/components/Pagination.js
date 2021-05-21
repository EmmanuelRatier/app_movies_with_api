const Pagination = ({ setPage, page }) => {


  return (
    <>
      <ul className="pagination ">
        <div>page:{page}</div>
        <li className="page-item">< button onClick={() => { setPage(page -= 1) }} style={{ visibility: page === 1 ? 'hidden' : 'visible' }}>Précédent</button></li>
        <li className="page-item"><button onClick={() => { setPage(page += 1) }} style={{ visibility: page === 500 ? 'hidden' : 'visible' }}>Suivant</button></li>
      </ul>
    </>
  )
}

export default Pagination