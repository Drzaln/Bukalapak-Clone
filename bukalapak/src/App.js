import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './screens/home';
import PromoHariIni from './components/PromoComponents/promoHariIni';
import ProductDetail from './components/productDetail/productDetail';
import Payment from './components/payment/payment';
import Cart from './components/cart/cart';
import SearchFilter from './components/SearchFilter/searchFilter';
import CategorySection from './components/categorySection/categorySection';
import ProductList from './components/ProductList/productList';

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact/>
      <Route path='/promoHariIni' component={PromoHariIni} exact/>
      <Route path='/productDetail' component={ProductDetail} exact/>
      <Route path='/productList' component={ProductList} exact/>
      <Route path='/cart' component={Cart} exact/>
      <Route path='/payment' component={Payment} exact/>
      <Route path='/searchFilter' component={SearchFilter} exact/>
      <Route path='/categorySection' component={CategorySection} exact/>
    </div>
  );
}

export default App;
