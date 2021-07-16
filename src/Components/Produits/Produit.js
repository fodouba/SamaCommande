import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/Samsung-Galaxy-S10e-Telephone-Portable-128GB-Prisme-Bleu.jpg'

const Produit = () => {
  
    return (
        <div className="container mt-5">
             <div className="card" style={{width: '20rem'}} id="card1">
            <img src={image} className="card-img-top" alt="Samsung-Galaxy-S10e-Telephone-Portable-128GB-Prisme-Bleu" />
            <div className="card-body">
              <h5 className="card-title">Samsung-Galaxy-S10e</h5>
              <p className="card-text">Samsung-Galaxy-S10e-Telephone-Portable-128GB-Prisme-Bleu</p>
              <div className="btn btn-primary">Voir Plus...</div>
              <Link to="#btn" className="btn btn-success">Commander</Link>
            </div>
          </div>
            
        </div>
    )
}

export default Produit
