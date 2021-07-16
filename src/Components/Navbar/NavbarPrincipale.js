import React from 'react'
import NavigationDroite from './NavigationDroite'
import { NavDropdown, Nav, Navbar } from 'react-bootstrap'
import './Navbarstyles/NavbarPrincipale.css'
import { Link } from 'react-router-dom'

function NavbarPrincipale() {
          

    return (
       <div className="container-fluid">
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand><Link to="contactes" style={{color: 'white', textDecoration: 'none', fontFamily: 'fantasy'}}>Sama Commande</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" style={{textDecoration: 'none', color: 'white', margin:'5px'}}>Accueil</Link>
                <Link to="/Services" style={{textDecoration: 'none', color: 'white', margin:'5px'}}>Services</Link>
                <Link to="/Contactes" style={{textDecoration: 'none', color: 'white', margin:'5px'}}>Contactes</Link>
                <NavDropdown title="Categories" id="collasible-nav-dropdown" style={{textDecoration:'none', color:'white'}}>
                  <NavDropdown.Item><Link to="/electroniques" style={{textDecoration: 'none'}}>Electroniques</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Habillements" style={{textDecoration: 'none'}}>Habillements</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Alimentations" style={{textDecoration: 'none'}}>Alimentations</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item style={{textDecoration: 'none'}}>Cosmétiques</NavDropdown.Item>
                  <NavDropdown.Item style={{textDecoration: 'none'}}>Accessoires</NavDropdown.Item>
                  <NavDropdown.Item style={{textDecoration: 'none'}}>Automobiles</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
                 <NavigationDroite />
          </Navbar>
       </div>
    )
}

export default NavbarPrincipale
