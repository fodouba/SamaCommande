import React from 'react'
import NavigationDroite from './NavigationDroite'
import { NavDropdown, Nav, Navbar } from 'react-bootstrap'
import './Navbarstyles/NavbarPrincipale.css'
import { Link } from 'react-router-dom'

function NavbarPrincipale() {
          

    return (
       <div className="container-fluid">
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand><Link to="contactes" style={{color: 'white', }}>Sama Commande</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/">Accueil</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Contactes">Contactes</Link>
                <NavDropdown title="Categories" id="collasible-nav-dropdown">
                  <NavDropdown.Item><Link to="/electroniques">Electroniques</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Habillements">Habillements</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Alimentations">Alimentations</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Cosmétiques</NavDropdown.Item>
                  <NavDropdown.Item>Accessoires</NavDropdown.Item>
                  <NavDropdown.Item>Automobiles</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
                 <NavigationDroite />
          </Navbar>
       </div>
    )
}

export default NavbarPrincipale
