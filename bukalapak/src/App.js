import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './screens/navbar/navbar';
import Home from './screens/home/home';
import ProductList from './screens/productList/productList';
import ProductDetail from './screens/productDetail/productDetail';
import Payment from './screens/payment/payment';
import Cart from './screens/cart/cart';

function App() {
  return (
    <div>
      <Navbar/>
      <Route path='/' component={Home} exact/>
      <Route path='/productList' component={ProductList} exact/>
      <Route path='/productDetail' component={ProductDetail} exact/>
      <Route path='/cart' component={Cart} exact/>
      <Route path='/payment' component={Payment} exact/>
    </div>
  );
}

export default App;
