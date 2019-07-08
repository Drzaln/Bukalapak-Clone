import React, { Component } from 'react';
import '../../support/styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="ml-5 mr-5 footer">
                <div className="row">
                    <div className="col-sm-2">
                        <img className="imgFooter" src="https://s1.bukalapak.com/images/desktop/benefits/jaminan.png" alt=""/>
                        <h6 className="text-sm-left mt-4">Jaminan 100% Aman</h6>
                        <p className="text-sm-left">Payment system Bukalapak menjamin keamanan uang Anda dalam bertransaksi. Pelajari amannya Bukalapak</p>
                    </div>
                    <div className="col-sm-2">
                        <img className="imgFooter" src="https://s1.bukalapak.com/images/desktop/benefits/bukadompet.png" alt=""/>
                        <h6 className="text-sm-left mt-4">Kemudahan Pembayaran</h6>
                        <p className="text-sm-left">Bukalapak menyediakan berbagai metode pembayaran untuk bertransaksi</p>
                    </div>
                    <div className="col-sm-2">
                        <img className="imgFooter" src="https://s1.bukalapak.com/images/desktop/benefits/cs.png" alt=""/>
                        <img src="https://s1.bukalapak.com/images/desktop/benefits/sq-award.png" alt=""/>
                        <h6 className="text-sm-left mt-4">Customer Support yang Responsif</h6>
                        <p className="text-sm-left">CS Bukalapak siap membantu Anda melalui e-mail, media sosial dan call center 
                        (021-5081-3333)</p>
                    </div>
                    <div className="col-sm-2">
                        <img className="imgFooter" src="https://s1.bukalapak.com/images/desktop/benefits/pengiriman.png" alt=""/>
                        <h6 className="text-sm-left mt-4">Berbagai Jasa Pengiriman</h6>
                        <p className="text-sm-left">Bukalapak menyediakan berbagai pilihan jasa pengiriman dengan jangkauan nasional</p>
                    </div>
                    <div className="col-sm-2">
                        <img className="imgFooter" src="https://s1.bukalapak.com/images/desktop/benefits/komunitas.png" alt=""/>
                        <h6 className="text-sm-left mt-4">6 Manfaat untuk Pelapak</h6>
                        <p className="text-sm-left">Dapatkan keuntungan seperti akses ke komunitas Bukalapak serta tips dan trik berjualan online</p>
                    </div>
                    <div className="col-sm-2">
                        <img className="imgFooter" src="https://s1.bukalapak.com/images/desktop/benefits/apps.png" alt=""/>
                        <h6 className="text-sm-left mt-4">Kemudahan Akses Mobile</h6>
                        <p className="text-sm-left">Download aplikasi Bukalapak di Android dan iOS. Nikmati kemudahan jual beli dari gadget Anda</p>
                    </div>
                </div>
                <hr/>
                <div className="row justify-content-between socials">
                    <div className="col-sm-8">
                        <img className="logoFooter" src="https://s1.bukalapak.com/images/logo/single_320x51_12_red_03052016.png" alt=""/> situs jual beli online mudah & terpercaya
                    </div>
                    <div className="col-sm-4 text-right">
                        <p>Temukan kami di : <i className="fa fa-facebook-square fa-lg mr-2" aria-hidden="true" />
                        <i className="fa fa-twitter-square fa-lg mr-2" aria-hidden="true" />
                        <i class="fa fa-youtube-play fa-lg mr-2" aria-hidden="true"></i>
                        <i class="fa fa-instagram fa-lg mr-2" aria-hidden="true"></i>
                        <i class="fa fa-google-plus fa-lg mr-2" aria-hidden="true"></i>
                        <i class="fa fa-linkedin-square fa-lg mr-2" aria-hidden="true"></i>
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <input type="button" className="btn btn btn-outline-secondary mb-3" value="BukaBantuan (Hubungi Kami)"/>
                        <input type="button" className="btn helper btn btn-outline-secondary mb-3" value="FAQ (Tanya Jawab)"/>
                        <input type="button" className="btn helper btn btn-outline-secondary mb-3" value="Panduan Belanja"/>
                        <input type="button" className="btn helper btn btn-outline-secondary mb-3" value="Panduan Pelapak"/>
                        <input type="button" className="btn helper btn btn-outline-secondary mb-3" value="Panduan Keamanan"/>                        
                    </div>
                    <div className="col-sm-2">
                        <h4 style={{fontWeight:"700", color:"#CACACA"}}>BukaLapak</h4>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Tentang BukaLapak</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Aturan Pengguanaan</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Kebijakan Prifasi</p>
                        <p style={{fontSize:12, marginBottom: "4px"}} >Penghargaan</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Karir di Bukalapak</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Identitas Brand</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Vulnerability Reports</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Blog BukaLapak</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Affiliate Program</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Timnas Indonesia</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>FAQ (tanya Jawab)</p>
                    </div>
                    <div className="col-sm-2">
                        <h4 style={{fontWeight:"700", color:"#CACACA"}}>Pembeli</h4>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Cara Belanja</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Pembayaran</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Jaminan Aman</p>
                        <p style={{fontSize:12, marginBottom: "4px"}} >Halaman Tag</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Produk Terkini</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Jasa Pengadaan</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Promo</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>BukaReview</p>
                    </div>
                    <div className="col-sm-2">
                        <h4 style={{fontWeight:"700", color:"#CACACA"}}>Pelapak</h4>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Keuntungan Jualan</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Index Merek</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Direktori Pelapak</p>
                        <p style={{fontSize:12, marginBottom: "4px"}} >Cara Berjualan</p>
                        <p style={{fontSize:12, marginBottom: "4px"}}>Beriklan di BukaIklan</p>
                    </div>
                    <div className="col-sm-3">
                        <p style={{fontSize:12, marginBottom: "4px"}}>Lebih mudah dan hemat di aplikasi Bukalapak. Masukkan nomor handphone kamu untuk mendapatkan aplikasi Bukalapak.</p>
                        <input type="text" className="form-control mt-3" placeholder="Masukkan Nomer Handphone"/>
                        <input type="button" className="btn btn-outline-danger mt-2" style={{width:"333px"}} value="Klik Link via SMS"/>
                    </div>
                </div>
                <hr/>
                <div className="row ml-2 mb-5">
                    <p style={{fontSize:12, marginBottom: "4px"}}>© 2019 Hak Cipta Terpelihara PT Bukalapak.com. <span style={{color:"red"}}>Arsip   Mobile Site   Peta Situs   Liputan 6</span> </p> 
                </div>
            </div>
        );
    }
}

export default Footer;