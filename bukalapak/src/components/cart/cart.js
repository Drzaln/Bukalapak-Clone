import React, { Component } from 'react';
import '../../support/styles/cart.css';
import Axios from 'axios';
import { localServer } from '../../support/urlAPI/localServer';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class Cart extends Component {
    state = {
        listProduct : []
    }

    componentDidMount() {
        this.getAllCart()
        window.scrollTo(0, 0)
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
    
    deleteCart = (id) => {  
        Axios.delete(localServer + '/cart/' + id)
        .then((res => {
            swal({
                title: "the Book Has Been Deleted",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
            this.getAllCart()
        }))
    }
    
    totalHarga = () => {
        let total = this.state.listProduct.reduce((sum, item) => (
            sum += item.prize
        ), 0)
            
        return total
    }

    renderCartJsx = () => {
        let jsx = this.state.listProduct.map((val) => {
            return (
                <div className="row mb-3 mt-5">
                    <div className="col-sm-6 text-center">
                        <div className="row">
                            <div className="col sm 4 gambar">
                                <img src={val.img} alt=""/>
                            </div>
                            <div className="col sm 6 align-self-center">
                                <div className="row">
                                    <h5>{val.lapakName}</h5>
                                </div>
                                <div className="row text-left">
                                    <h5>{val.productName}</h5>
                                </div>
                                <div className="row">
                                    <input type="button" value="-"/>
                                    <input style={{width:"50px"}} className="text-center" value={val.qty} type="text"/>
                                    <input type="button" value="+"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 align-self-center">
                        <CurrencyFormat value={val.prize} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                    </div>
                    <div className="col-sm-1 align-self-center">
                        <i onClick={() => this.deleteCart(val.id)} style={{cursor:"pointer"}} className="fa fa-times" aria-hidden="true" />
                    </div>
                    </div>
            )
        })
        return jsx
    }

    render() {
        return (
            <div>
                
                <div className="ml-5 mr-5">
                    {this.renderCartJsx()}
                </div>
                <hr/>
                <div className="row ml-5">
                    <div className="col-md-3 offset-md-3 text-center">
                        <h5>total harga <CurrencyFormat value={this.totalHarga()} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> </h5>
                    </div>
                    <div className="col-sm-2 text-right">
                        <Link to='/payment'><input type="button" className="btn btn-danger" value="Bayar"/></Link>
                    </div>                    
                </div>
                <hr/>
                
            </div>          
        );
    }
}

export default Cart;