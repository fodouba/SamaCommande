import React from 'react'

const Login = () => {
   
    return (
        <div id="connection" style={{paddingBlock: '25px', justifyContent: 'center', alignItems:'center', padding:'15px', marginTop:'10rem'}}>
            <h2 style={{marginTop:'15px'}}>Connexion</h2>
            <form id="form1">

                <div className="entree" id="identif">
                    <label htmlFor="Id">
                    <input 
                    type="text" 
                    id="Id" 
                    placeholder="Idendifiant" 
                    name="identifiant" 
                    className="form-control text-center mt-4" 
                    required/>
                    </label>
                </div>

                <div className="entree" id="passe">
                    <label htmlFor="MdP">
                    <input 
                    type="password" 
                    id="MdP" 
                    name="MdP" 
                    placeholder="Mot de passe" 
                    className="form-control text-center my-3"  
                    required/>
                    </label>
                </div>

                <div className="entree text-center" id="checkbox">
                    <input 
                    type="checkbox" 
                    name="chkbox" 
                    id="chkbox" 
                    className="chekbox mb-3 mt-2 m-2"  />
                    <label htmlFor="chkbox">Se souvenir de moi</label>
               
                </div>

                <button type="submit" id="submit" className="btn btn-primary">Valider</button>
            </form>
               <div className="compte mt-5">
               <small className="container mt-5">Vous n'avez de compte?<em className="m-2"><a href="//#endregion" alt="Login" id="login" className="m-2">Créer un compte, c'est gratuit!</a></em></small>
               </div>
        </div>
    )
}

export default Login
