import React from 'react'
import Modal from './Modal'

const Character = ( {fetchCharacters, setFavorites, favorites } ) => {

    const addFavorites = (character) => {
        if(favorites.includes(character)) return
        setFavorites(favorites => [...favorites, character])
    }

    // let characterMapped
    const characterMapped = fetchCharacters.map( character => {
        let {id, name, image } = character
        return (
            <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="card">
                <img src={image} className="card-img-top" alt={name}/>
                    <div className="card-body">
                        <Modal className="card-title fw-bold" character={character}/>
                        <button onClick={() => addFavorites(character)} className="btn btn-info w-100 mt-3">
                            ❤️
                        </button>
                    </div>
                </div>
            </div>
            )
        } 
    )

    return characterMapped
    
}

export default Character