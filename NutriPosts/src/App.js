import React, { useState, useEffect } from 'react'
import './App.css'
const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'


function App() {
  const [nutri, setNutri] = useState([])

  useEffect(() => {
    function loadApi() {
      fetch(url).then((r) => {
        r.json().then((json) =>{
          setNutri(json);
        })
      })
    }
    loadApi();
  },[])
 
  return (
    
    <div className='container'>
      <header>
        <strong className='title'>NutriPosts</strong>
      </header>
      {nutri.map((item) =>{
        return (
          <article key={item.id} className='post'>
            <strong className='post-title'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa' />
            <p className='subtitulo'>{item.subtitulo}</p>
            <a href='' className='botao'>Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
