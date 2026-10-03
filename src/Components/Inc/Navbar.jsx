import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../image/logo.png'

const Navbar = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                      <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              
                 <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo Bon Combat"
                        width="50"
                        
                        className="me-2"
                    />
                    <span className="fw-bold">Bon combat</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Aprops">A propos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/Article">Article</Link>
                        </li>
                        <li class="nav-item">
                           <Link className="nav-link"  to="/Contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                           <Link className="nav-link"  to="/Formation">Formation</Link>
                        </li>
                        <li class="nav-item">
                           <Link className="nav-link"  to="/Librairie">Librairie</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
                </div>

            </div>

        </div>
      
    )
}

export default Navbar
