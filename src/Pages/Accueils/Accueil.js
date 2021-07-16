import React from 'react'
import Login from '../../Components/Connexion/Login'
import images from '../../images/images'

console.log(images);

const Accueil = () => {
  
    return (
        <div>
          <div className="content" id="login" hidden><Login /></div>
          <h2>Accueil</h2>
        </div>
          
    )
}
export default Accueil

