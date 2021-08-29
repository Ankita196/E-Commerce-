import React, { useEffect, useState } from 'react';
import './style.css';

const App =()=> {
  const [products,setProducts]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((json)=>setProducts(json))
  }, []);
  
    

  return( 
  <div>
    {products.map((product,index)=>(
      <div>
        <h1>{product.title}</h1>
        <img src={product.image} />
        <h1>{product.price}</h1>
      </div>
    ))} </div>

  );
}

export default App