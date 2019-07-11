import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";

export default class flashCarousel extends Component {
  items = [
    {
      gmb:
        "https://s3.bukalapak.com/img/3286597118/medium/Samsung_Galaxy_A50_64GB_Black_Garansi_SEIN.jpg",
      harga: "Rp2.000",
      ind: 20,
      teks: "BukaMart"
    },
    {
      gmb: "https://s2.bukalapak.com/img/720953542/medium/ts_i-sweet_25s_l.jpg",
      harga: "Rp3.000",
      ind: 40,
      teks: "Anker"
    },
    {
      gmb:
        "https://s4.bukalapak.com/img/9735706072/medium/KAPAL_API_SPECIAL_MERAH_380_GR.jpg",
      harga: "Rp150.000",
      ind: 50,
      teks: "JBL"
    },
    {
      gmb: "https://s1.bukalapak.com/img/13836269601/medium/data.png",
      harga: "Rp15.000",
      ind: 70,
      teks: "P&G"
    },
    {
      gmb:
        "https://s3.bukalapak.com/img/8112595504/medium/KecapBangoKecapManisRefill575ml575mlAsliMurah_1_scaledjpg_sc.jpg",
      harga: "Rp20.000",
      ind: 93,
      teks: "Consina"
    },
    {
      gmb: "https://s1.bukalapak.com/img/13836269601/medium/data.png",
      harga: "Rp40.000",
      ind: 11,
      teks: "Unicharm"
    },
    {
      gmb:
        "https://s0.bukalapak.com/img/5720205803/medium/2018_08_20T11_04_15_07_00.jpg",
      harga: "Rp32.000",
      ind: 86,
      teks: "Daimaru"
    }
  ];

  state = {
    galleryItems: this.items.map(i => (
      <div
        className="card"
        style={{ width: "95%", height: "20rem", borderRadius: 2 }}
      >
        <img src={i.gmb} style={{ width: "100%" }} />
        <div className="col">
          <div className="row" style={{ marginLeft: 2 }}>
            <text style={{ color: "black", fontSize: 13 }}>{i.teks}</text>
          </div>
          <div className="row" style={{ marginLeft: 2, marginTop: "40%" }}>
            <text
              className="font-weight-bold"
              style={{ color: "black", fontSize: 15, color: "#d71149" }}
            >
              {i.harga}
            </text>
          </div>
          <text style={{ marginLeft: 2, marginTop: 16, fontSize: 12 }}>
            {i.ind} Tersisa
          </text>
          <div className="progress" style={{ height: "6px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: i.ind, backgroundColor: "#87cc62" }}
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    ))
  };

  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel._onDotClick(i)} />
  );

  render() {
    const responsive = {
      0: {
        items: 1
      },
      1: {
        items: 2
      },
      2: {
        items: 3
      },
      3: {
        items: 4
      },
      4: {
        items: 5
      },
      5: {
        items: 6
      }
    };

    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "#F05171", paddingBottom: 16, paddingTop: 8 }}
      >
        <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div
            className="row align-items-center"
            style={{ marginBottom: "1%" }}
          >
            <text
              className="font-weight-bold"
              style={{ color: "white", fontSize: 25 }}
            >
              Flash Deal
            </text>
            <span
              class="badge badge-pill"
              style={{
                marginLeft: "2%",
                fontWeight: "normal",
                fontSize: 15,
                backgroundColor: "#ffc53e"
              }}
            >
              Berakhir dalam <b>04 : 58 : 32</b>
            </span>
          </div>
          <AliceCarousel
            dotsDisabled={true}
            responsive={responsive}
            buttonsDisabled={true}
            autoPlayInterval={1000}
            autoPlayDirection="ltr"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            items={this.state.galleryItems}
            ref={el => (this.Carousel = el)}
          />
        </div>
      </div>
    );
  }
}
