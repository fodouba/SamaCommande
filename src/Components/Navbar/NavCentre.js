import React from 'react'
import { Nav } from 'react-bootstrap'
import './Navbarstyles/navCentre.css'


const NavCentre = () => {
    return (
        <div className="NavCentre">
           <Nav className="navbar">

              <ul className="Nav-items">
                  
                  <div className="nav-item">
                       <li className="Nav-link">Accueil</li>
                  </div>
                      

                  <div className="nav-item">
                       <li className="Nav-link">Services</li>
                  </div>


                  <div className="nav-item">
                       <li className="Nav-link">Contactes</li>
                  </div>


                  <div className="nav-item">
                    <li className="nav-link dropdown">
                              <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Market Place
                              </div>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><navlink className="nav-link dropdown-item">Electroniques</navlink></li>
                              <li><navlink className="nav-link dropdown-item">Habillements</navlink></li>
                              <li><navlink className="nav-link dropdown-item">Alimentations</navlink></li>
                              <li><navlink className="nav-link dropdown-item">Accessoires</navlink></li>
                              <li><navlink className="nav-link dropdown-item">Cosmétiques</navlink></li>
                              <li><navlink className="nav-link dropdown-item">Automobiles</navlink></li>
                              </ul>
                    </li>
                  </div>

               </ul>

           </Nav>
        </div>
    )
}

export default NavCentre
