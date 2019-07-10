import React, { Component } from 'react';
import Header from '../components/header/navbar';
import Footer from '../components/footer/footer';
import CarouselPromo from '../components/CarouselPromo/CarouselPromo';
import SearchFilter from '../components/SearchFilter/searchFilter';
import CategorySection from '../components/categorySection/categorySection';
import '../support/styles/home.css';
import PromoHariIni from '../components/PromoComponents/promoHariIni';

class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <Header/>
                <div className="container-fluid">
                <CarouselPromo/>               
                <SearchFilter/>
                <CategorySection/>
                <PromoHariIni/>
                <Footer/>
                </div>                              
            </div>
        );
    }
}

export default Home;