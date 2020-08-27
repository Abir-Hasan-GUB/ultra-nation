import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Componants/Country/Country';
import Cart from './Componants/Cart/Cart';

function App() {
  const [countries,setCountries] = useState([]);
  const [cart,setCart] = useState([]);

  //Data load here from api
  useEffect(()=>{ 
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[]);


  const handleCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
    console.log("Added country",country);
  };

  return (
    <div className="App">
     <h1>Country Loaded: {countries.length}</h1>
  <h2>Country Select: {cart.length}</h2>
  <Cart cart = {cart}></Cart>
     <ul>
          {
            countries.map(country=> <Country 
              country={country} handleCountry = {handleCountry} key ={country.alpha3Code}
              ></Country>)
          }
     </ul>
    </div>
  );
}

export default App;
