import React from 'react'
import Produit from '../../Components/Produits/Produit'
import imagess from '../../images/images'




const Services = () => {
    return (
        <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
           <div className="col" style={{display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
               <Produit> {imagess} </Produit>
           </div>
           
            
             
            
        </div>
    )
};

export default Services
