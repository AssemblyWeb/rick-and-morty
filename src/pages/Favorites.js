import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Favorites = ({ favorites, setFavorites }) => {

  const removeFavorites = (character) => {
    const { id } = character
    const newFavorites = favorites.filter(character => character.id !== id)
    setFavorites(newFavorites)
  }

  const favoritesMapped = favorites.map( character => {
    let { id, name, image } = character
    return (
      <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="card">
        <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title fw-bold">{name}</h5>
                <button onClick={() => removeFavorites(character)} className="btn btn-info w-100">
                  💔
                </button>
            </div>
        </div>
    </div>
    )
  })

  return (
    <>
      <Header />
      <div className="container">
        <Link to='/'>
          <button className="btn btn-info mt-5">Turn back</button>
        </Link>
        <h2 className="text-white my-4 text-center">Favorites</h2>
        <div className="row">
          {favoritesMapped}
        </div>
      </div>
    </>
  )
}

export default Favorites