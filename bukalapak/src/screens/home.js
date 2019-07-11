import React, { Component } from 'react';
import Footer from '../components/footer/footer';
import CarouselPromo from '../components/CarouselPromo/CarouselPromo';
import PromoIni from "../components/carousels/promoHariIni";
import BukaMall from "../components/carousels/bukaMall";
import SearchFilter from '../components/SearchFilter/searchFilter';
import CategorySection from '../components/categorySection/categorySection';
import FlashCarousel from "../components/carousels/flashCarousel";
import '../support/styles/home.css';
import ProductList from '../components/productList/productList';

class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="container-fluid">
                    <CarouselPromo/>
                    <SearchFilter/>
                    <CategorySection/>
                    <FlashCarousel/>
                    <PromoIni/>
                    <BukaMall/>
                    <ProductList/>
                </div>
            </div>
        );
    }
}

export default Home;