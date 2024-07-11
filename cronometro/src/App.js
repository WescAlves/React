import React, {Component} from 'react'
import './App.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      tempo : 0.0,
      nomeBtn: 'Iniciar'
    }
    this.iniciar = this.iniciar.bind(this)
    this.zerar = this.zerar.bind(this)
    this.timer = null;
  }


  iniciar(){
    if(this.timer!== null){
      clearInterval(this.timer)
      this.setState({nomeBtn:'Continuar'})
      this.timer = null;
    }
    else{
      this.timer = setInterval(() =>{
        let state = this.state;
        state.tempo += 0.1
        state.nomeBtn = 'Pausar'
        this.setState(state)
        
    }, 100)
    }
    
  }
  zerar(){
    clearInterval(this.timer)
    let state = this.state;
    state.tempo = 0.0;
    this.timer = null;
    state.nomeBtn = 'Iniciar'
    this.setState(state);
  }


  render(){
    return(
      <div className='container'>
        <img className='img' src={require('./assets/cronometro.png')} />
        <a className='timer'>{this.state.tempo.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='btn' onClick={this.iniciar}>{this.state.nomeBtn}</a>
          <a className='btn' onClick={this.zerar}>Zerar</a>
        </div>
      </div>
    )
  }

}

export default App;
