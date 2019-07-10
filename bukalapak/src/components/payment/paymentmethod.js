import React, { Component, Fragment } from "react";
import Cardpayment from "./cardpayment/cardpayment";

class paymentmethod extends Component {
  render() {
    return (
      <Cardpayment
        headcardnamea="Pilih Metode Pembayaran"
        cardbodya={
          <div class="card mb-3">
            <div class="card-header">
              <input type="radio" />
              &nbsp;&nbsp;<b>Credits</b>
              <span style={{ border: 1 }}>
                <img
                  src="https://i.ibb.co/5BXFScF/Screenshot-from-2019-07-09-17-17-07.png"
                  width="13%"
                />
              </span>
            </div>
            <div class="card-body">
              <div>
                <span>
                  Credits kamu <b>Rp0</b>
                </span>
                <br />
                <br />{" "}
                <span>
                  <p>
                    Credits kamu tidak mencukupi untuk membayar transaksi ini.
                    Silakan pilih metode pembayaran lainnya.
                  </p>
                </span>
              </div>
            </div>

            <div class="card-header">
              <input type="radio" />
              &nbsp;&nbsp;<b>Transfer Bank</b>
              <span style={{ border: 1 }}>
                <img
                  src="https://i.ibb.co/svkmpTX/Screenshot-from-2019-07-09-17-49-02.png"
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/9nXRGZh/Screenshot-from-2019-07-09-17-56-23.png"
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/MRTbv9f/Screenshot-from-2019-07-09-17-56-52.png "
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/tCPsFm7/Screenshot-from-2019-07-09-17-57-14.png"
                  width="13%"
                />
              </span>
            </div>
            <div class="card-body">
              <div>
                <div className="alert alert-warning" role="alert">
                  Kode pembayaran akan dikembalikan ke BukaDompet milikmu.
                </div>
                <div className>
                  <strong>Ketentuan pembayaran:</strong>{" "}
                  <ul className="u-mrgn-top--2">
                    <li>
                      Pembayaran dapat dilakukan melalui transfer ke rekening
                      Bank BCA, Bank Mandiri, Bank Syariah Mandiri, Bank BNI,
                      atau Bank BRI.
                    </li>
                    <li>
                      Total belanja kamu belum termasuk kode pembayaran untuk
                      keperluan proses verifikasi otomatis
                    </li>
                    <li>Mohon transfer tepat sampai 3 digit terakhir</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card-header">
              <input type="radio" />
              &nbsp;&nbsp;<b>Transfer Virtual Account</b>
              <span style={{ border: 1 }}>
                <img
                  src="https://i.ibb.co/svkmpTX/Screenshot-from-2019-07-09-17-49-02.png"
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/9nXRGZh/Screenshot-from-2019-07-09-17-56-23.png"
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/MRTbv9f/Screenshot-from-2019-07-09-17-56-52.png "
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/tCPsFm7/Screenshot-from-2019-07-09-17-57-14.png"
                  width="13%"
                />
              </span>
            </div>
            <div class="card-body">
              <div>
                <label for="exampleFormControlSelect1">
                  Pilih bank penyedia virtual account
                </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option value="">Pilih Bank</option>{" "}
                  <option value="bca">Virtual Account BCA</option>
                  <option value="mandiri">Virtual Account Mandiri</option>
                  <option value="bri">Virtual Account BRI (BRIVA)</option>
                  <option value="bni">Virtual Account BNI</option>
                  <option value="bni_syariah">
                    Virtual Account BNI Syariah
                  </option>
                  <option value="permata">Virtual Account Permata</option>
                  <option value="danamon">Virtual Account Danamon</option>
                  <option value="cimb">Virtual Account CIMB Niaga</option>
                </select>
              </div>
            </div>

            <div class="card-header">
              <input type="radio" />
              &nbsp;&nbsp;<b>Kartu Visa/Mastercard/JCB/AMEX</b>
              <span style={{ border: 1 }}>
                <img
                  src="https://i.ibb.co/60pgcFZ/Screenshot-from-2019-07-09-20-25-13.png"
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/RyTKYLk/Screenshot-from-2019-07-09-20-25-32.png"
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/G2fxmgQ/Screenshot-from-2019-07-09-20-26-22.png"
                  width="13%"
                />
                <img
                  src="https://i.ibb.co/2stQm0Z/Screenshot-from-2019-07-09-20-26-50.png"
                  width="13%"
                />
              </span>
            </div>
            <div class="card-body">
              <div>
                <div className>
                  <strong>Ketentuan pembayaran:</strong>{" "}
                  <ul className="u-mrgn-top--2">
                    <li>
                      Pembayaran dapat dilakukan menggunakan kartu berlogo
                      Visa/Mastercard/JCB/AMEX
                    </li>
                    <li>Kamu tidak akan dikenakan biaya pelayanan.</li>
                    <li>
                      Uang refund akan dikembalikan melalui transfer bank atau
                      BukaDompet untuk pembayaran melalui kartu debit Mandiri.
                    </li>
                    <li>
                      Jika terjadi refund (pengembalian uang pembayaran), uang
                      refund akan dikembalikan ke rekening kartu kreditmu.
                    </li>
                  </ul>
                </div>
                <div className="alert alert-warning" role="alert">
                  Penggantian barang tidak berlaku untuk metode pembayaran ini
                  jika pesanan ditolak/tidak ditanggapi pelapak
                </div>
              </div>
            </div>


            <div class="card-header">
              <input type="radio" />
              &nbsp;&nbsp;<b>Indomaret</b>
              <span style={{ border: 1 }}>
                <img
                  src="https://i.ibb.co/CnLZQhf/Screenshot-from-2019-07-09-20-43-11.png"
                  width="13%"
                />
              </span>
            </div>
            <div class="card-body">
              <div>
              <div className="alert alert-warning" role="alert">
              Nilai transaksi kamu lebih dari batas maksimum untuk pembayaran melalui Indomaret. Silakan gunakan metode pembayaran lainnya.
                </div>
                <div className>
                  <strong>Ketentuan pembayaran:</strong>{" "}
                  <ul className="u-mrgn-top--2">
                    <li>
                    Pembayaran dapat dilakukan di gerai Indomaret terdekat pilihan kamu.
                    </li>
                    <li>Tunjukkan Nomor Tagihan kepada kasir Indomaret.</li>
                    <li>
                    Pihak Indomaret akan mengenakan biaya tambahan sebesar Rp2.500 di luar total tagihan.
                    </li>
                    <li>
                    Maksimum total belanja untuk satu transaksi adalah Rp5.000.000
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>

            <div class="card-header">
              <input type="radio" />
              &nbsp;&nbsp;<b>Alfamart</b>
              <span style={{ border: 1 }}>
                <img
                  src="https://i.ibb.co/5ncTfyX/Screenshot-from-2019-07-09-20-08-15.png"
                  width="13%"
                />
              </span>
            </div>
            <div class="card-body">
              <div>
              <div className="alert alert-warning" role="alert">
              Nilai transaksi kamu lebih dari batas maksimum untuk pembayaran melalui Alfamart. Silakan gunakan metode pembayaran lainnya.
                </div>
                <div className>
                  <strong>Ketentuan pembayaran:</strong>{" "}
                  <ul className="u-mrgn-top--2">
                    <li>
                    Pembayaran dapat dilakukan di salah satu gerai Alfamart, Alfamidi, Lawson, & Dan+Dan terdekat pilihan kamu.
                    </li>
                    <li>Tunjukkan Nomor Tagihan kepada kasir.</li>
                    <li>
                    Pihak Alfamart akan mengenakan biaya tambahan sebesar Rp2.500 di luar total tagihan.
                    </li>
                    <li>
                    Maksimum total belanja untuk satu transaksi adalah Rp3.500.000.
                    </li>
                  </ul>
                </div>
                
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
        btncardb="Bayar" link="/payment/paymetod/payreport"
      />
    );
  }
}

export default paymentmethod;
