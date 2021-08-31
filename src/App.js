import React, { useEffect, useState } from 'react';
import './style.css';
import Products from "./components/Products/products"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import {BrowserRouter ,Route} from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"

const App =()=> {
 
     

  return( 
  <div>
<Navigation/>
<br/>

 <BrowserRouter>
 <Route exact path="/"><Products /></Route>
<Route><ProductDetails /></Route>
 </BrowserRouter>
    
</div>

  );
  }

export default App