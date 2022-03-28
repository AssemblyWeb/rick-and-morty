import React from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'
import Pagination from '../components/Pagination'
import Character from '../components/Character'
import portal from '../assets/img/portal.png'


const Characters = ({ fetchCharacters, setPageNumber, pageNumber, loading, setSearchbar, setFavorites, favorites }) => {

  //In case the Search doesn't match anything, we show a message
  if (!fetchCharacters) {
    return (
      <>
        <Header />
        <Filter setSearchbar={setSearchbar} favorites={favorites}/>
        <div className="h2 text-info text-center mt-5">No character found 😔</div>
      </>
    )
  } 

  if(loading) {
    return (
      <>
        <Header />
        <Filter setSearchbar={setSearchbar} favorites={favorites}/>
        <div className="d-flex justify-content-center">
          <img src={portal} alt="loading" className="loading"/>
        </div>
      </>
    )
  } 

  return (
    <>  
      <Header />
      <Filter setSearchbar={setSearchbar} favorites={favorites}/>
      <div className="container">
        <h2 className="text-white my-4 text-center">Characters</h2>
        <div className="row">
          <Character fetchCharacters={fetchCharacters} setFavorites={setFavorites} favorites={favorites}/>
        </div>
        <div className="row">
          <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber}/>
        </div>
      </div>
    </>
  )
}

export default Characters