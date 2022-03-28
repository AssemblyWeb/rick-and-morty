import React from 'react'

const Pagination = ({ setPageNumber, pageNumber }) => {
  let PrevPage = () => {
    if ( pageNumber === 1 ) return // prevent from going to page 0
    setPageNumber(page => page - 1)
  }
  let NextPage = () => {
    setPageNumber(page => page + 1)
  }
  return (
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <div onClick={PrevPage} className="page-link cursor">Previous</div>
          </li>
          <li className="page-item">
            <div onClick={NextPage} className="page-link cursor">Next</div>
          </li>
        </ul>
      </nav>
  )
}

export default Pagination