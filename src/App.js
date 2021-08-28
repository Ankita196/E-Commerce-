import React, { useEffect, useState } from 'react';
import './style.css';

const App =()=> {
  const [product,setProduct]=useState({})
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
  }, []);
  
    
if(product){
  return( 
  <h1>{product.title}
  </h1>

  );
}

export default App