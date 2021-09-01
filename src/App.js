import React, { useEffect, useState } from 'react';
import './style.css';
import Products from "./components/Products/Products"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import {BrowserRouter ,Route,Switch} from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"

const App =()=> {
 
     

  return( 
  <div>


 <BrowserRouter>
 <Navigation/>
 <Switch>
 <Route exact path="/"><Products /></Route>
<Route path="/products/:id"><ProductDetails /></Route>
</Switch>
 </BrowserRouter>
    
</div>

  );
  }

export default App