import React, { Component } from 'react';
import Header from '../header/navbar';
import '../../support/styles/cart.css';
import Axios from 'axios';
import { localServer } from '../../support/urlAPI/localServer';

class Cart extends Component {
    state = {
        listProduct : []
    }

    componentDidMount() {
        this.getAllCart()
    }

    getAllCart = () => {
        Axios.get(localServer + '/cart')
        .then((res) => {
            this.setState({listProduct : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    // deleteCart = () => {
    //     let id = this.props.match.params.id
    //     Axios.delete(localServer + '/cart/' + id)
    //     .then((res => {
            
    //     }))
    // }
    
    renderCartJsx = () => {
        let jsx = this.state.listProduct.map((val) => {
            return (
                <div className="row mb-3">
                    <div className="col-sm-6 text-left">
                        <div className="row">
                            <div className="col sm 4 gambar">
                                <img src={val.img} alt=""/>
                            </div>
                            <div className="col sm 6 align-self-center">
                                <div className="row">
                                    <h5>{val.lapakName}</h5>
                                </div>
                                <div className="row">
                                    <h5>{val.productName}</h5>
                                </div>
                                <div className="row">
                                    <input type="button" value="-"/>
                                    <input style={{width:"50px"}} className="text-center" type="text"/>
                                    <input type="button" value="+"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 align-self-center">
                        Rp. {val.prize}
                    </div>
                    <div className="col-sm-1 align-self-center">
                        <i onClick={this.deleteCart} style={{cursor:"pointer"}} className="fa fa-times" aria-hidden="true" />
                    </div>
                    </div>
            )
        })
        return jsx
    }

    render() {
        return (
            <div>
                <Header/>
               <div className="ml-5 mr-5">
                    {this.renderCartJsx()}
                </div> 
            </div>          
        );
    }
}

export default Cart;