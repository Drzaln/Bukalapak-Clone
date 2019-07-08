import React, { Component } from 'react';
import Cardpayment from './cardpayment/cardpayment'

class Payment extends Component {
    render() {
        return (
            <Cardpayment 
            headcardnamea= "Detail Pembeli"
            headcardnameb= "Ringkasan Belanja"
            btncardb = "Pilih Metode Pembayaran"
            headcardnamec= "Detail Belanja"
            />
            // <div>
            //     <h1>Payment</h1>
            // </div>
        );
    }
}

export default Payment;