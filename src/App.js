import React from 'react';
import './style.css';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/cart/:id" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;