import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './screens/home';
import Promoini from './components/carousels/promoHariIni';
import ProductDetail from './components/productDetail/productDetail';
import Payment from './components/payment/paymentmethod';
import Cart from './components/cart/cart';
import BukaMall from "../src/components/carousels/bukaMall";

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact/>
      <Route path='/promoini' component={Promoini} exact/>
      <Route path='/bukaMall' component={BukaMall} exact/>
      <Route path='/productDetail' component={ProductDetail} exact/>
      <Route path='/cart' component={Cart} exact/>
      <Route path='/payment' component={Payment} exact/>
    </div>
  );
}

export default App;
