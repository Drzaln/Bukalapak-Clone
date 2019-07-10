import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './screens/home';
// import Promoini from './components/promoHari_ini/promoHariIni';
import ProductDetail from './components/productDetail/productDetail';
import Payment from './components/payment/payment';
import Paymentmetod from './components/payment/paymentmethod';
import Paymentreport from './components/payment/paymentreport';
import Cart from './components/cart/cart';
// import BukaMall from "../src/components/promoHari_ini/bukaMall";

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact/>
      {/* <Route path='/promoini' component={Promoini} exact/> */}
      {/* <Route path='/bukaMall' component={BukaMall} exact/> */}
      <Route path='/productDetail' component={ProductDetail} exact/>
      <Route path='/cart' component={Cart} exact/>
      <Route path='/payment' component={Payment} exact/>
      <Route path='/payment/paymetod' component={Paymentmetod} exact/>
      <Route path='/payment/paymetod/payreport' component={Paymentreport} exact/>
    </div>
  );
}

export default App;
