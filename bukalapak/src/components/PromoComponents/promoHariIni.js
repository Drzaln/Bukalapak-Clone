import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class PromoHariIni extends Component {
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
        {/* // list buka mall */}
        <div className="row">
          <div className="col-4">
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "1rem" }}
            >
              <button
                type="button"
                className="btn btn-light"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  fontWeight: "bold",
                  fontSize: 13
                }}
              >
                Lihat Semua Brand
              </button>

              <img
                src="https://www.bukalapak.com/images/brand_pages/promoted-brand.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-8">
            <AliceCarousel mouseDragEnabled>
              <img
                src="https://s1.bukalapak.com/uploads/flash_banner/15414/homepage_banner/s-354-354/354x354_produk_terlaris_c.jpg.webp"
                className="yours-custom-class"
              />
              <img
                src="https://s1.bukalapak.com/uploads/flash_banner/15414/homepage_banner/s-354-354/354x354_produk_terlaris_c.jpg.webp"
                className="yours-custom-class"
              />
              <img
                src="https://s1.bukalapak.com/uploads/flash_banner/15414/homepage_banner/s-354-354/354x354_produk_terlaris_c.jpg.webp"
                className="yours-custom-class"
              />
              <img
                src="https://s1.bukalapak.com/uploads/flash_banner/15414/homepage_banner/s-354-354/354x354_produk_terlaris_c.jpg.webp"
                className="yours-custom-class"
              />
              <img
                src="https://s1.bukalapak.com/uploads/flash_banner/15414/homepage_banner/s-354-354/354x354_produk_terlaris_c.jpg.webp"
                className="yours-custom-class"
              />
            </AliceCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoHariIni;
