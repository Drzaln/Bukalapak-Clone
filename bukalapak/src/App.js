import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './screens/home';
import Promoini from './components/carousels/promoHariIni';
import ProductDetail from './screens/productDetail';
import Payment from './components/payment/payment';
import Paymentmetod from './components/payment/paymentmethod';
import Paymentreport from './components/payment/paymentreport';
import Cart from './components/cart/cart';
import BukaMall from "../src/components/carousels/bukaMall";
import SearchFilter from "../src/components/SearchFilter/searchFilter";
import CategorySection from "../src/components/categorySection/categorySection";
import ProductList from './components/productList/productList';

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact/>
      <Route path='/promoini' component={Promoini} exact/>
      <Route path='/bukaMall' component={BukaMall} exact/>
      <Route path='/productDetail/:id' component={ProductDetail} exact/>
      <Route path='/cart' component={Cart} exact/>
      <Route path='/payment' component={Payment} exact/>
      <Route path='/payment/paymetod' component={Paymentmetod} exact/>
      <Route path='/payment/paymetod/payreport' component={Paymentreport} exact/>
      <Route path='/searchFilter' component={SearchFilter} exact/>
      <Route path='/categorySection' component={CategorySection} exact/>
      <Route path='/productList' component={ProductList} exact/>
      
    </div>
  );
}

export default App;
