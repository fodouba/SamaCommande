import React, { Component } from 'react'
import './login1.css'

class Login extends Component {
        constructor(props){
             super(props)
             this.state = {
                 'identifiant': '',
                 'motDePasse': '',
                 'erreurs': {
                     'erreuridentifiant': '',
                     'erreurmoDePasse': ''
                 }

                }
                this.handleChange = this.handleChange.bind(this);
                this.handleClick = this.handleChange.bind(this); 
                
            }
            handleChange = e =>{
                const identifiant = (e.target.name);
                this.state.identifiant = identifiant;
                
                  
            }
            handleClick = e => {
                e.preventDefault();
                console.log(`Vous avez cliqué sur ${e.target.name}`);
               
            }
            
        render() {
            return (
                <div className="login1 mt-5 px-5 bg-success" style={{justifyContent: "center", alignContent: "center"}}>
                <form className="Login" id="Login"  onSubmit={this.handlesubmit}>
                    <div className="form-items" id="login">
                        <label htmlFor="login1" >
                        <input 
                              type="text" 
                              name="login" 
                              id="login1" 
                              className="form-control mb-3"
                              placeholder="Identifiant"
                              onChange={this.handleChange}
                              required
                              />
                        </label>

                        <label htmlFor="mdp1">
                        <input 
                              type="password" 
                              name="mdp" 
                              id="mdp1" 
                              placeholder="Mot de passe" 
                              className="form-control mb-3"
                              onChange={this.handleChange}
                              required/>
                        </label>


                        <button 
                               type="submit" 
                               id="submit"
                               className="btn-primary"
                               >
                            Se connecter
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
