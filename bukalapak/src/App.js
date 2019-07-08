import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './screens/home';
import ProductList from './components/productList/productList';
import ProductDetail from './components/productDetail/productDetail';
import Payment from './components/payment/payment';
import Cart from './components/cart/cart';

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact/>
      <Route path='/productList' component={ProductList} exact/>
      <Route path='/productDetail' component={ProductDetail} exact/>
      <Route path='/cart' component={Cart} exact/>
      <Route path='/payment' component={Payment} exact/>
    </div>
  );
}

export default App;
