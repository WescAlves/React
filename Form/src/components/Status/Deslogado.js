import React, { Component } from 'react';


class Deslogado extends Component {
    
    
    render(){
        return(
            <div>
                <h1>Bem vindo visitante, por favor faça o login no sistema</h1>
                <button onClick={this.fazerLogin}>Entrar</button>
            </div>
        )
    }
}

export default Deslogado