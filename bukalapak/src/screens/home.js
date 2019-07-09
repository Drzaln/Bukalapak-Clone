import React, { Component } from 'react';
import Header from '../components/header/navbar';
import Footer from '../components/footer/footer';
import CarouselPromo from '../components/CarouselPromo/CarouselPromo';
import SearchFilter from '../components/SearchFilter/searchFilter';
import CategorySection from '../components/categorySection/categorySection';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselPromo/>               
                <SearchFilter/>
                <CategorySection/>
                <Footer/>
            </div>
        );
    }
}

export default Home;