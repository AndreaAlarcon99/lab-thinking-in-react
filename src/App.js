import './App.css';
import Products from './components/Products';
import SearchBar from './components/SearchBar';
import dataJson from "./data.json"
import { useState } from 'react';

const dataJsonCopy = [...dataJson]


function App() {
  const [dataJson, setDataJson] = useState(dataJson);


   const searchProductHandler = (dish) =>{
    const productMod = [...dataJsonCopy];
    const filterProduct = productMod.filter(element => {
      if (dish.length < 1) {
        return productMod }
      else {
        return element.name.toLowerCase().includes(dish.toLowerCase())
      }
    }) 
    console.log(filterProduct)
    setDataJson(filterProduct) 
  }

  return (
    <div className="App">
      <h1>IronStore</h1>
      <SearchBar searchProduct={ searchProductHandler} />
    <Products/>
      
    </div>
  );
}

export default App;
