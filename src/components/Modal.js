import React from 'react'

const Modal = ({ character }) => {
    const {name, id, gender, image, location, species, status } = character
 
    return (
        <>
            <div className="link-dark fw-bold cursor" data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
                {name} 
            </div>
            <div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="exampleModalLabel">{name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={image} alt={name}  className="img-fluid d-block w-100"/>
                        <div className="mt-2 ">
                            <div>Gender: <span className="fw-bold">{gender}</span></div>
                            <div>Last seen on: <span className="fw-bold">{location.name}</span></div>
                            <div>Species: <span className="fw-bold">{species}</span></div>
                            <div>Status: <span className="fw-bold">{status}</span></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal