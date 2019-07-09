import React, { Component, Fragment } from "react";
import {
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Cardpayment from "./cardpayment/cardpayment";

class paymentmethod extends Component {
  render() {
    return (
      <Cardpayment
        headcardnamea="Pilih Metode Pembayaran"
        cardbodya={        
            <div class="card mb-3">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              <div className="form-group">
        <label className>
          <div className="iradio_flat-green checked" aria-checked="true" aria-disabled="false" style={{position: 'relative'}}><input type="radio" name="r3" className="flat-red" defaultChecked style={{position: 'absolute', opacity: 0}} /><ins className="iCheck-helper" style={{position: 'absolute', top: '0%', left: '0%', display: 'block', width: '100%', height: '100%', margin: '0px', padding: '0px', background: 'rgb(255, 255, 255)', border: '0px', opacity: 0}} /></div>
        </label>
      </div>
              <b>
              
              </b>
              </div>
            <div class="card-body">
            
            </div>
          </div>
        }
        headcardnameb="Ringkasan Belanja"
        cardbodyb={
          <div class="card mb-3">
            <div class="row justify-content-between">
              <div class="col-6" style={{ color: "grey", marginBottom: 30 }}>
                Punya Kode Voucher?
              </div>
              <div class="col-4"></div>
            </div>
            <div class="row justify-content-between">
              <div class="col-6">Total Harga Barang</div>
              <div class="col-4">Rp15.325.000</div>
            </div>
            <div class="row justify-content-between">
              <div class="col-6">Biaya Kirim</div>
              <div class="col-4">Rp15.325.000</div>
            </div>
            <div class="row justify-content-between">
              <div class="col-6">Biaya Asuransi</div>
              <div class="col-4">Rp15.325.000</div>
            </div>
            <div class="row justify-content-between" style={{ marginTop: 45 }}>
              <div class="col-6">
                <b>Biaya Asuransi</b>
              </div>
              <div class="col-4 " style={{ color: "red" }}>
                <b>Rp15.325.000</b>
              </div>
            </div>
          </div>
        }
        btncardb="Bayar"
      />
    );
  }
}

export default paymentmethod;
