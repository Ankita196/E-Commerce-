import React, { useEffect, useState } from 'react';
import './style.css';
import Products from "./components/products"
import {BrowserRouter ,Route} from "react-router-dom"
const App =()=> {
 
    

  return( 
  
<BrowserRouter>
<Route exact  path="/">
<Products /><Route>
<Route exact  path="/">
<Products /><Route>

<BrowserRouter>
    


  );
}

export default App