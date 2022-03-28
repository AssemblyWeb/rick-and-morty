import React from 'react'
import { Link } from 'react-router-dom'

const Filter = ({ setSearchbar, favorites }) => {

  const num = favorites.length

  return (
    <div className="container mt-5 filter">
      <div className="row ">
        <div className="col-12 col-sm-6 col-md-4 mb-1 mx-auto d-block">
          <form className="input-group">
              <input type="text" name="Search" placeholder="Search character..." className="form-control"
                onChange={(e) => {
                  setSearchbar(e.target.value)
                }}
              />

            <Link to="/favorites">
              <button type="button" className="btn btn-info position-relative mx-2">
                Favorites
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {num}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link> 
          </form>
        </div>
      </div>
    </div>
  )
}

export default Filter