import React, { Component } from 'react';
import Cardpayment from './cardpayment/cardpayment'

class Payment extends Component {
    render() {
        return (
            <Cardpayment 
            headcardnamea= "Detail Pembeli"
            cardbodya= {
                <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-chart-bar"></i><b>
                  Rizal
                  </b>
                  </div>
                <div class="card-body">
                  Sumedang
                </div>
              </div>
            }
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