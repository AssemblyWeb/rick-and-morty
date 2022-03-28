import React from 'react'
import { Link } from 'react-router-dom'
import rickandmorty_logo from '../assets/img/Rick_and_Morty.png'

const Header = () => {
  return (
    <header className="header container">
        <Link to="/"><img src={rickandmorty_logo} className="header-logo img-fluid cursor mt-3 mx-auto d-block" alt="Rick and Morty" /></Link>
    </header>
  )
}

export default Header