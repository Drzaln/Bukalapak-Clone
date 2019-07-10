import React, { Component } from "react";
import "react-alice-carousel/lib/alice-carousel.css";

class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div>
            <p className="font-weight-bold">Promo Hari Ini</p>
          </div>
          <div
            className="card"
            style={{ width: "13rem", marginBottom: "1rem" }}
          >
            <a href="click-ah">
              <img
                src="https://s1.bukalapak.com/uploads/flash_banner/15414/homepage_banner/s-354-354/354x354_produk_terlaris_c.jpg.webp"
                className="card-img-top"
                alt="..."
              />
            </a>
          </div>
          <div>
            <a href="click-ah" style={{ color: "black", fontSize: 14 }}>
              <p className="font-weight-light">Kumpulan Produk Terlaris</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
