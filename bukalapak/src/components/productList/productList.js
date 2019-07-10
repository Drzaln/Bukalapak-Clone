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

    renderProductJsx = () => {
        let jsx = this.state.listProduct.map((val) => {
            return (                                                      
                <div className="card cardProduct mr-2" style={{width: '12rem'}}>
                    <img src={val.img} className="card-img-top" alt="..." />
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
            <div className="contaienr-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-10">    
                        <div className="row justify-content-md-center">
                            {this.renderProductJsx()}
                        </div>                                            
                    </div>                               
                </div>
            </div>
            
        );
    }
}

export default ProductList;