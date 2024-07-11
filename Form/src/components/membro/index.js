import React, { Component } from 'react';

class Membro extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome: props.nome
        }
        this.atualizarUsuario = this.atualizarUsuario.bind(this);
        this.sair = this.sair.bind(this);
    }
    atualizarUsuario(nome){
        let state = this.state;
        state.nome = nome;
        this.setState(state)
    }

    sair(){
        let state = this.state;
        state.nome = 'Visitante';
        this.setState(state);
    }

    render(){
        return (
            <div>
                <h2>Bem vindo, {this.state.nome}</h2>
                <button onClick={() => this.atualizarUsuario('Wesley')}>Entrar como Wesley</button>
                <button onClick={this.sair}>Sair</button>
            </div>
        )
    }
}

export default Membro;