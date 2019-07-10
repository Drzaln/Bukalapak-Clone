import React, { Component, Fragment } from "react";
import "../../support/styles/paymentreport.css";

class paymentreport extends Component {
  render() {
    return (
      <div class="container valign">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-7 col-xs-7">
          <div className="alert alert-warning" role="alert">
                  Kode pembayaran akan dikembalikan ke BukaDompet milikmu.
                </div>
            <div class="card-header">
              &nbsp;&nbsp;<b>Pembayaran via Transfer Bank</b>
            </div>
            <div class="card-body">
              <div>
                <div className="u-align-center">
                  <div className="u-mrgn-bottom--6 u-mrgn-top--1">
                    Batas pembayaran:
                    <span
                      className="js-countdown u-txt--fair u-txt--bold"
                      data-expired={1562754835}
                      id="js-payment-countdown"
                    >
                      <span id="js-payment-countdown__hours" className>
                        <span>9</span> jam{" "}
                      </span>
                      <span id="js-payment-countdown__minutes" className>
                        <span>38</span> menit{" "}
                      </span>
                      <span id="js-payment-countdown__seconds" className>
                        <span>32</span> detik
                      </span>
                    </span>
                  </div>
                  <div className="u-mrgn-bottom--1">
                    <div className="u-mrgn-bottom--1">Jumlah tagihan:</div>
                    <div className="u-txt--large u-txt--bold u-mrgn-bottom--1">
                      <span className="currency positive">Rp</span>
                      <span className="amount positive">133</span>.
                      <span className="u-bg--sand">195</span>
                    </div>
                    <div className="js-copy-advanced u-mrgn-bottom--2 u-mrgn-top--2">
                      <div
                        className="js-copy-advanced-trigger"
                        data-advanced-type="text"
                        data-clipboard-text={133195}
                      >
                        <span className="c-link-rd" title="Copy to Clipboard">
                          Salin Jumlah
                        </span>
                      </div>
                      <div className="js-copy-to-clipboard-msg u-hidden" />
                    </div>
                    <div className="c-tooltip c-tooltip--bottom u-pad-bottom--0">
                      <div className="c-tooltip__pointer" />
                      <div className="c-tooltip__content u-txt--base">
                        Transfer tepat hingga 3 digit terakhir agar
                        <br />
                        tidak menghambat proses verifikasi
                      </div>
                    </div>
                  </div>
                  <div className="u-mrgn-top--6 u-mrgn-bottom--1">
                    Nomor tagihan:
                  </div>
                  <strong className="u-txt--large">
                    <a
                      data-no-turbolink="true"
                      className="u-txt--bold"
                      href="https://www.bukalapak.com/payment/invoices/4493550751"
                    >
                      BL1913GKGUPCINV
                    </a>
                  </strong>
                </div>
                ;

                <div>
                  <p>Petunjuk pembayaran melalui transfer</p>
                  <div>
                    <div>
                      <div>
                        <div>
                        <img
                          alt="Transfer"
                          src="https://s2.bukalapak.com/images/confirmation_page/atm-1.png"
                        />
                        </div>
                        <div>
                          <span>1.</span>
                          <p>
                            Transfer dapat melalui <b>ATM, SMS / M-Banking,</b> dan{" "}
                            <b>E-Banking.</b>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                        <img
                         alt="Ke rekening Bukalapak"
                         src="https://s3.bukalapak.com/images/confirmation_page/atm-2.png"
                        />
                        </div>
                        <div>
                          <span>2.</span>
                          <p>
                          Masukkan <b>nomor rekening Bukalapak.</b>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                        <img
                         alt="Tepat hingga 3 digit terakhir"
                         src="https://s1.bukalapak.com/images/confirmation_page/atm-3.png"
                        />
                        </div>
                        <div>
                          <span>3.</span>
                          <p>
                          Masukkan <b>jumlah bayar</b> tepat hingga <b>3 digit terakhir.</b>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                        <img
                         alt="Simpan bukti transfer"
                         src="https://s1.bukalapak.com/images/confirmation_page/atm-4.png"
                        />
                        </div>
                        <div>
                          <span>4.</span>
                          <p>
                          Simpan <b>bukti transfer</b> yang kamu dapatkan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                  Pembayaran dapat dilakukan ke salah satu rekening a/n PT Bukalapak.com berikut:
                  </p>
                  <div>
                    <div>
                      <div>
                        <div>
                        <img
                          alt="Logo BCA"
                          src="https://www.bukalapak.com/images/logo-bca.gif"
                          style={{ height: "32px" }}
                        />
                        <div>Bank BCA, Jakarta</div>
                        <strong>731 025 2527</strong>
                        <br />
                        <div>
                          <div>
                            <div>
                              <span>Salin No. Rek</span>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <div>
                        <img
                          alt="Logo Mandiri"
                          src="https://www.bukalapak.com/images/logo-mandiri.gif"
                          style={{ height: "32px" }}
                        />
                        <div>Bank Mandiri, Jakarta</div>
                        <strong>0700 000 899 992</strong>
                        <br />
                        <div>
                          <div>
                            <div>
                              <span>Salin No. Rek</span>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <div>
                        <img
                          alt="Logo BSM"
                          src="https://www.bukalapak.com/images/logo-bsm.gif"
                          style={{ height: "32px" }}
                        />
                        <div>Bank BSM, Jakarta</div>
                        <strong>778 887 7708</strong>
                        <br />
                        <div>
                          <div>
                            <div>
                              <span>Salin No. Rek</span>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <div>
                        <img
                          alt="Logo BNI"
                          src="https://www.bukalapak.com/images/logo-bni.gif"
                          style={{ height: "32px" }}
                        />
                        <div>Bank BNI, Jakarta</div>
                        <strong>023 827 2088 </strong>
                        <br />
                        <div>
                          <div>
                            <div>
                              <span>Salin No. Rek</span>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <div>
                        <img
                          alt="Logo BRI"
                          src="https://www.bukalapak.com/images/logo-bri.gif"
                          style={{ height: "32px" }}
                        />
                        <div>Bank BRI, Jakarta</div>
                        <strong>034 101 000 743 303</strong>
                        <br />
                        <div>
                          <div>
                            <div>
                              <span>Salin No. Rek</span>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="exadiv-current">
Pembelianmu dicatat dengan nomor tagihan pembayaran
<strong><a data-no-turbolink="true" href="https://www.bukalapak.com/payment/invoices/4493550751" class="">#BL1913GKGUPCINV</a></strong>.
Bukalapak akan melakukan verifikasi otomatis paling lama 30 menit setelah kamu melakukan pembayaran. Jika kamu menghadapi kendala mengenai pembayaran, silakan langsung <a target="_blank" href="https://www.bukalapak.com/bukabantuan">BukaBantuan</a>.
</p>
<a data-no-turbolink="true" class="btn btn-danger btn-block" href="https://www.bukalapak.com/payment/invoices/4493550751">Lihat Tagihan Pembayaran</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default paymentreport;
