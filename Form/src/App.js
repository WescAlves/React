import React, { Component } from 'react'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      form:{
        nome:'',
        email:'',
        senha:''
      }
    }
    this.atualizarForm = this.atualizarForm.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
  }

  atualizarForm(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }
  cadastrar(e){
    const {nome, email, senha} = this.state.form;
    if(nome === '' || email === '' || senha === ''){
      alert('Por favor, verifique se todos os campos estão preenchidos corretamente!!')
    }
    else{
      alert(`Nome: ${nome} \nEmail: ${email}\nSenha: ${senha} `)
    }
    
    e.preventDefault()
  }

  
  render(){
      return(
        <div>
          <h1>Novo Usuário</h1>
          <form onSubmit={this.cadastrar}>
            <label>Nome:</label>
            <input type = 'text' name = 'nome' value = {this.state.form.nome} onChange={this.atualizarForm} /><br/><br/>
            <label>Email:</label>
            <input type = 'email' name = 'email' value = {this.state.form.email} onChange={this.atualizarForm} /><br/><br/>
            <label>Senha:</label>
            <input type = 'password' name = 'senha' value = {this.state.form.senha} onChange={this.atualizarForm} /><br/>
            <button type='submit' >Cadastrar</button>
          </form>
        </div>

      )
  } 
    
      
        
      
    
    

  }



export default App;