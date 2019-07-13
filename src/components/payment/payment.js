import React, { Component, Fragment } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Cardpayment from "./cardpayment/cardpayment";
import Cart from "../cart/cart";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <Fragment>
        <hr style={{ border: "none" }} />
        <Cardpayment
          headcardnamea="Detail Pembeli"
          cardbodya={
            <div class="card mb-3">
              <div class="card-header">
                <i className="fa fa-user-o" aria-hidden="true" />
                &nbsp;&nbsp;<b>Rizal Rohman (Alamat Utama)</b>
                <UncontrolledDropdown>
                  <DropdownToggle nav caret style={{ color: "grey" }}>
                    Kirim Ke Alamat lain
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div class="card-body">
                <div>
                  <span>Toko</span>
                  <br /> <span>kota bandung</span>
                  <br /> <span>Batununggal, Bandung</span>
                  <br /> <span>Jawa Barat, 40273</span>
                  <br /> <span>Indonesia</span>
                  <br /> <span>6285257978035</span>
                  <br />{" "}
                  <div>
                    <span className="fa fa-map-marker " />{" "}
                    <span>Koordinat belum dipilih</span>
                  </div>
                  <div style={{ marginTop: 2 }}>
                    <span className="fa fa-pencil" />{" "}
                    <a href="#" className="c-link-rd">
                      Ubah Alamat
                    </a>
                  </div>
                </div>
                <div style={{ marginTop: 25, marginLeft: 14 }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Kirim sebagai dropshipper
                  </label>
                </div>
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
                <div class="col-4" />
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
              <div
                class="row justify-content-between"
                style={{ marginTop: 45 }}
              >
                <div class="col-6">
                  <b>Biaya Asuransi</b>
                </div>
                <div class="col-4 " style={{ color: "red" }}>
                  <b>Rp15.325.000</b>
                </div>
              </div>
            </div>
          }
          btncardb="Pilih Metode Pembayaran"
          link="/payment/paymetod"
          headcardnamec="Detail Belanja"
          cardbodyc={
            <div class="card mb-3">
              <Cart />
            </div>
          }
          headcardnameb="Ringkasan Belanja"
          cardbodyb={
            <div class="card mb-3">
              <div class="row justify-content-between">
                <div class="col-6" style={{ color: "grey", marginBottom: 30 }}>
                  Punya Kode Voucher?
                </div>
                <div class="col-4" />
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
              <div
                class="row justify-content-between"
                style={{ marginTop: 45 }}
              >
                <div class="col-6">
                  <b>Biaya Asuransi</b>
                </div>
                <div class="col-4 " style={{ color: "red" }}>
                  <b>Rp15.325.000</b>
                </div>
              </div>
            </div>
          }
        />
      </Fragment>
    );
  }
}

export default Payment;
