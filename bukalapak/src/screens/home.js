import React, { Component } from 'react';
import Header from '../components/header/navbar';
import Footer from '../components/footer/footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Home</h1>
                <Footer/>
            </div>
        );
    }
}

export default Home;