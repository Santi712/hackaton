import React from 'react'
import logo from './logo.svg';
import image from './assets/image/imagen-curso1.png'
import './App.css';
/*import ProductDetail from './components/ProductDetail/ProductDetail';
import Card from './components/cardPrueba/cardPrueba'
import data from './assets/dummy-data.json'*/
//import IMAGE from './assets/image/imagen-curso1.png'
import ProductDetail from './components/productDetail2/productDetail'



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ProductDetail photoUrl ={image} title = "Curso de Figma" experience = "User flows y arquitectura de la información." level = "PRINCIPIANTE" name= "Elsa Pato" position = "Diseñadora ux/ui" shortDescription = "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor." price = "35,99€" discountPrice = "25,99€" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
}

export default App;
