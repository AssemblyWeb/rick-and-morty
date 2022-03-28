import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Characters , Favorites } from './pages'
import { fetchData } from './services/getApi'
import './App.css'
import Footer from './components/Footer'

function App() {
  
  let [pageNumber, setPageNumber] = useState(1)
  let [searchbar, setSearchbar] = useState("")
  let [loading, setLoading] = useState(true)
  let [fetchCharacters, updateCharacters] = useState([])
  let [favorites, setFavorites] = useState([])

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchbar}`

  useEffect(() => {
      setLoading(true)
      fetchData(api)
        .then((response) => {
          const { results } = response.data
          updateCharacters(results)
          setLoading(false)
        })
        .catch(e => {
          //show a message indicating that the filter didn't match anything
          if (e.response.status === 404) {
            updateCharacters()
          }
        })
      }, [api])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Characters fetchCharacters={fetchCharacters} setPageNumber={setPageNumber} pageNumber={pageNumber} loading={loading} setSearchbar={setSearchbar} favorites={favorites} setFavorites={setFavorites}/>} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
