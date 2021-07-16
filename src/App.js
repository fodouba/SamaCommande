import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarPrincipale from './Components/Navbar/NavbarPrincipale'
import { Switch, Link, Route } from 'react-router-dom'
import Accueil from './Pages/Accueils/Accueil'
import Services from './Pages/Services/Services'
import Contactes from './Pages/Contacte/Contactes'


function App() {
  
  return (
    <div className="container-fluid">
      <NavbarPrincipale />
      <Switch>
        <Route exact path="/services">
            <Services />
          <Link to="/services">
          </Link>
        </Route>
        <Route exact path="/contactes">
          <Link to="/contactes">
          </Link>
            <Contactes />
        </Route>
        <Route path="/">
          <Link to="/">
          </Link>
            <Accueil />
        </Route>
      </Switch>
    </div>
  );
}

export default App
