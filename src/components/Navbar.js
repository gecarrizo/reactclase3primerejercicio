import React from 'react'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ZONA MATERIAL</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Herramientas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pinturas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Sanitarios</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Cerámicos</a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default navbar