import './App.css';
import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';

export default function App() {
  return (
      <>
    <header className="App">
      <p><Link to='/home'>Home</Link></p>
      <p>
        <Link to='/contato'>Contato</Link>
      </p>
      <p>
        <Link to='/sobre'>Sobre</Link>
      </p>
    </header>
    <main>
        <Switch>
          <Route path='/contato' component= {Contato}/>
          <Route path='/home' component= {Home}/>
          <Route path='/sobre' component= {Sobre}/>
        </Switch>

        <form name="meu_form" className='App'>

        <h1>Entre em contato</h1>

        <input type="text" id="nomeid" placeholder="Digite seu nome" required name="nome" /> 
        <label for="nome">Nome</label> 

        <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="telefone" /> 
        <label for="telefone">Telefone</label> 

        <input type="email" id="emailid" placeholder="Digite seu e-mail" required name="email" /> 
        <label for="email">Email</label> 

        <textarea placeholder="Deixe sua opinião"></textarea> 
        <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" /> 

        </form>
      </main></>
  );
}



