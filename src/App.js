import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


let pais = "ARGENTINA";

function App() {
  return (
    <>
      <h1 className='App'>HOLA MUNDO!!</h1>
      <hr/>
      <p></p>Sommos de {pais}!!! Uso de FRAGMENT ABREVIADO<p/>
      <button type="button" className="btn btn-primary">Primary</button>
      <img src='https://www.infobae.com/pf/resources/images/logo_infobae_naranja.svg?d=864' alt='Infobae'></img>
    </>
  );
}

export default App;
