import React, { Component } from 'react';

class HeaderComponent extends Component {
    state = { 
        connected : false,
        links : [
            "Connexion",
            "Profil",
            "Deconnexion"
        ]
     }

     constructor(){
        super();
        fetch("/logged")
            .then(response => { 
                response.ok ? console.log("ok") : console.log("non ok");
                return response.json() ;
            })
            .then(data => {
                console.log(data.r);
                if (data.r == "1") this.setState({connected : true});
            })
            .catch(error => {
                console.log("erreur : ", error);
            });
     }

    render() { 
        console.log("state 1: ", this.state.connected)
        return (
            <React.Fragment>
                <div className="left">
                    <img src="https://jadeveloppement.fr/storage/02/logo-sans-fond.png"></img>
                    <h1>Democrite</h1>
                </div>

                <div className="right">
                    {this.renderLink()}
                </div>
            </React.Fragment>
        );
    }

    renderLink(){
        if (this.state.connected){
            return (
                <React.Fragment>
                    <a>Profil</a>
                    <a>Déconnexion</a>   
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <a>Connexion</a>
                </React.Fragment>
            );
        }
    }
}
 
export default HeaderComponent;