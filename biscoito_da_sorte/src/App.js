
import React, { Component } from 'react'
import './estilo.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      textoFrase : ''
    }
    this.abreBiscoito = this.abreBiscoito.bind(this)
    this.frases = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4', 'Frase 5', 'Frase 6', 'Frase 7', 'Frase 8' , 'Frase 9', 'Frase 10']
  }

  abreBiscoito(){
    this.setState({textoFrase:this.pegaFraseAleatorio()})
  }

  pegaFraseAleatorio(){
    let index = Math.floor(Math.random()*this.frases.length)
    return '" ' + this.frases[index] + ' "'
  } 

  render(){
    return (
      <div className='container'>
        <img className='img' src={require('../src/assets/biscoito.png')} />
        <Botao nome = 'Abrir Biscoito' acaoBtn = {this.abreBiscoito}/>
        <h3 className='texto-frase'>{this.state.textoFrase}</h3>
      </div>
    )
  };

}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
