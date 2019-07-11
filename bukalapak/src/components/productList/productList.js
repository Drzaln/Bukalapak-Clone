import React, { Component } from 'react';
import '../../support/styles/productList.css';
import { localServer } from '../../support/urlAPI/localServer';
import { Link } from 'react-router-dom';
import Axios from 'axios'

class ProductList extends Component {
    state = {
        listProduct : []
    }

    componentDidMount() {
        this.getAllProduct()
    }
    

    getAllProduct = () => {
        Axios.get(localServer + '/product')
        .then((res) => {
            this.setState({listProduct : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    searchFashionPria = () => {
        Axios.get(localServer + '/product?q=fashion pria')
        .then((res) => {
            this.setState({listProduct : res.data})
        })
    }

    searchFashionWanita = () => {
        Axios.get(localServer + '/product?q=fashion wanita')
        .then((res) => {
            this.setState({listProduct : res.data})
        })
    }

    searchElektronik = () => {
        Axios.get(localServer + '/product?q=elektronik')
        .then((res) => {
            this.setState({listProduct : res.data})
        })
    }

    searchERumahTangga = () => {
        Axios.get(localServer + '/product?q=rumah tangga')
        .then((res) => {
            this.setState({listProduct : res.data})
        })
    }

    searchPerawatan = () => {
        Axios.get(localServer + '/product?q=perawatan dan kecantikan')
        .then((res) => {
            this.setState({listProduct : res.data})
        })
    }
    
    renderProductJsx = () => {
        let jsx = this.state.listProduct.map((val) => {
            return (
                <div className="card cardProduct mr-3 mb-3" style={{width: '12rem'}}>
                    <img src={val.img} className="card-img-top image" alt="..." />
                    <div className="middle">
                        <div className="text"><img src={val.lapakImg} className="rounded-circle" alt=""/></div>
                    </div>
                    <h4><span className="badge badge-danger rounded-circle badgeDiscount">{val.discount}%</span></h4>
                    <div className="card-body">
                        <h5 className="card-title hidden">{val.productName}</h5>
                        <p className="card-text hidden">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            )
        })
        return jsx
    }
    render() {
        return (
            <div className="ml-5 mr-5 mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-sm-2 text-right">
                        <h5 className="mb-3">Kategori</h5>
                        <p><b style={{cursor:"pointer"}} onClick={this.getAllProduct}>Semua Kategori</b><br/><br/>
                        <b style={{cursor:"pointer"}} onClick={this.searchFashionPria}>Fashion Pria</b><br/><br/>
                        <b style={{cursor:"pointer"}} onClick={this.searchFashionWanita}>Fashion Wanita</b><br/><br/>
                        <b style={{cursor:"pointer"}} onClick={this.searchElektronik}>Elektronik</b><br/><br/>
                        <b style={{cursor:"pointer"}} onClick={this.searchERumahTangga}>Rumah Tangga</b><br/><br/>
                        <b style={{cursor:"pointer"}} onClick={this.searchPerawatan}>Perawatan dan Kecantikan</b></p>
                        <hr/>
                        <h5 className="mb-3">Jasa Pengiriman</h5>
                        <p><b>J&T REG <input type="checkbox"/></b></p>
                        <p><b>Paxel Same Day <input type="checkbox"/></b></p>
                        <p><b>SiCepat BEST <input type="checkbox"/></b></p>
                        <p><b>SiCepat REG <input type="checkbox"/></b></p>
                        <p><b>Lion Parcel REGPACK <input type="checkbox"/></b></p>
                        <p><b>Lion Parcel ONEPACK <input type="checkbox"/></b></p>
                    </div>
                    <div className="col-sm-10">    
                        <div className="row justify-content-md-left">
                            {this.renderProductJsx()}
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ProductList;