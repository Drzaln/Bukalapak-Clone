import React, { Component } from "react";
import "react-alice-carousel/lib/alice-carousel.css";

class ProductDetail extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="card" style={{ width: "100%", height:"100%" }}>
              <div className="row">
                <div className="col-4"  >
                <img src="https://s3.bukalapak.com/img/8030598897/w-300/data.png.webp" className="img-fluid" alt="..." style={{width:"100%"}} ></img>
                <div className="row" style={{marginTop:10}} >
                <div className="col-4" style={{paddingRight:0}} >
                  <img src="https://s1.bukalapak.com/qr/product/1ek5ioh" style={{width:"100%"}} />
                </div>
                <div className="col-8" >
                <text style={{fontSize:12}} ><b>Kode QR untuk transaksi di aplikasi Bulapakak</b> Temukan fitur scan kode QR di kolom pencarian aplikasi Bukalapak.</text>
                
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
