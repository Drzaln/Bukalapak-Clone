import React, { Component } from "react";
import "react-alice-carousel/lib/alice-carousel.css";

class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" style={{marginBottom:"4%", marginTop:"2%"}} >
          <div>
            <p className="font-weight-bold" style={{ fontSize: 17 }}>
              Promo Hari Ini
            </p>
          </div>
          <div className="row">
            <div className="col-sm-2">
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
                  <p className="font-weight-light" style={{ fontSize: 15 }}>
                    Kumpulan Produk Terlaris
                  </p>
                </a>
              </div>
            </div>
            <div className="col-sm-2">
              <div
                className="card"
                style={{ width: "13rem", marginBottom: "1rem" }}
              >
                <a href="click-ah">
                  <img
                    src="https://s1.bukalapak.com/uploads/flash_banner/13614/homepage_banner/s-354-354/354x354_FASHION_PRIA_C.jpg.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
              </div>
              <div>
                <a href="click-ah" style={{ color: "black", fontSize: 14 }}>
                  <p className="font-weight-light" style={{ fontSize: 15 }}>
                  Fashion Terlaris untuk Tampil Stylish
                  </p>
                </a>
              </div>
            </div>
            <div className="col-sm-2">
              <div
                className="card"
                style={{ width: "13rem", marginBottom: "1rem" }}
              >
                <a href="click-ah">
                  <img
                    src="https://s1.bukalapak.com/uploads/flash_banner/14614/homepage_banner/s-354-354/354x354_HOLIIDAY_OUTFIT_C.jpg.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
              </div>
              <div>
                <a href="click-ah" style={{ color: "black", fontSize: 14 }}>
                  <p className="font-weight-light" style={{ fontSize: 15 }}>
                    Holiday Outfit
                  </p>
                </a>
              </div>
            </div>
            <div className="col-sm-2">
              <div
                className="card"
                style={{ width: "13rem", marginBottom: "1rem" }}
              >
                <a href="click-ah">
                  <img
                    src="https://s1.bukalapak.com/uploads/flash_banner/15614/homepage_banner/s-354-354/354x354_LAPTOP_C.jpg.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
              </div>
              <div>
                <a href="click-ah" style={{ color: "black", fontSize: 14 }}>
                  <p className="font-weight-light" style={{ fontSize: 15 }}>
                  Koleksi Laptop dan Aksesoris Laris
                  </p>
                </a>
              </div>
            </div>
            <div className="col-sm-2">
              <div
                className="card"
                style={{ width: "13rem", marginBottom: "1rem" }}
              >
                <a href="click-ah">
                  <img
                    src="https://s1.bukalapak.com/uploads/flash_banner/16614/homepage_banner/s-354-354/354x354_INCARAN_C.jpg.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
              </div>
              <div>
                <a href="click-ah" style={{ color: "black", fontSize: 14 }}>
                  <p className="font-weight-light" style={{ fontSize: 15 }}>
                  Koleksi Incaran Sejagat Online
                  </p>
                </a>
              </div>
            </div>
            <div className="col-sm-2">
              <div
                className="card"
                style={{ width: "13rem", marginBottom: "1rem" }}
              >
                <a href="click-ah">
                  <img
                    src="https://s1.bukalapak.com/uploads/flash_banner/18614/homepage_banner/s-354-354/354x354_FOOD_C.jpg.webp"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
              </div>
              <div>
                <a href="click-ah" style={{ color: "black", fontSize: 14 }}>
                  <p className="font-weight-light" style={{ fontSize: 15 }}>
                  Makanan Lezat Ramah di Kantong
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
