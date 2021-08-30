import React, { useEffect, useState } from 'react';
import './style.css';
import Products from "./components/products"
import ProductDetails from "./components/Products/ProductDetails"
import {BrowserRouter ,Route} from "react-router-dom"


const App =()=> {
 
    

  return( 
  <div>
<BrowserRouter>
<Products />
<Route exact  path="/product">
<Products /></Route>
<Route   path="/product/:id">
<ProductDetails  /></Route>

</BrowserRouter>
    
</div>

  );
  }

export default App