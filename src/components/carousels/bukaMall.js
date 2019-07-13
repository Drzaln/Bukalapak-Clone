import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";

export default class bukaMall extends Component {
  items = [
    {
      gmb:
        "https://s1.bukalapak.com/img/1642688723/original/Garnier_Sakura_White_Day_Cream_20Ml.png.webp",
      bdg:
        "https://s1.bukalapak.com/uploads/logos/6813/w-160/bukamall-logo-new.jpg",
      teks: "BukaMart"
    },
    {
      gmb:
        "https://s2.bukalapak.com/img/2014184091/w-200/Anker_PowerLine_Micro_USB_Cable_3ft_09m___Black.jpg.webp",
      bdg: "https://s2.bukalapak.com/uploads/logos/731/w-160/Foto_Anker.jpg",
      teks: "Anker"
    },
    {
      gmb: "https://s2.bukalapak.com/img/7435523831/w-200/W5Erk8U.png.webp",
      bdg:
        "https://s2.bukalapak.com/uploads/logos/7701/w-160/JBL_LOGO_3300x2550pix_color.jpg",
      teks: "JBL"
    },
    {
      gmb:
        "https://s3.bukalapak.com/img/3866806755/w-200/2019_01_18T13_55_39_07_00.jpg.webp",
      bdg: "https://s4.bukalapak.com/uploads/logos/4564/w-160/logo_P_G.png",
      teks: "P&G"
    },
    {
      gmb: "https://s3.bukalapak.com/img/8108898297/w-200/data.png.webp",
      bdg:
        "https://s0.bukalapak.com/uploads/logos/0065/w-160/Logo_CSN_Hijau_500x500.jpg",
      teks: "Consina"
    },
    {
      gmb:
        "https://s1.bukalapak.com/img/6862637423/w-200/2018_09_17T16_03_50_07_00.jpg.webp",
      bdg: "https://s1.bukalapak.com/uploads/logos/1113/w-160/unicharm123.jpg",
      teks: "Unicharm"
    },
    {
      gmb: "https://s2.bukalapak.com/img/2914265123/w-200/IMG_6864.png.webp",
      bdg:
        "https://s4.bukalapak.com/uploads/logos/9714/w-160/logo_drbrowns.jpg",
      teks: "Daimaru"
    }
  ];

  state = {
    galleryItems: this.items.map(i => (
      <a href="#">
        <div className="card" style={{ width: "100%", height: "23rem" }}>
          <span
            class="badge badge-danger"
            style={{ position: "absolute", right: 0, zIndex: 999 }}
          >
            PROMO
          </span>
          <img
            src={i.gmb}
            className="card-img-top"
            alt={i.gmb}
            style={{ opacity: 0.5 }}
          />
          <div className="card-body">
            <img
              src={i.bdg}
              style={{
                width: "70%",
                position: "absolute",
                bottom: "30%",
                borderRadius: 20,
                boxShadow: `0px 2px 10px #4c4c4c`,
                height: "30%"
              }}
            />
          </div>
          <ul
            class="list-group list-group-flush"
            style={{ borderStyle: "none" }}
          >
            <li
              class="list-group-item text-center"
              style={{ color: "black", fontWeight: "normal", fontSize: 15 }}
            >
              {i.teks}
            </li>
          </ul>
        </div>
      </a>
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
      600: {
        items: 2
      },
      600: {
        items: 3
      },
      600: {
        items: 4
      },
      600: {
        items: 5
      },
      600: {
        items: 6
      }
    };

    return (
      <div>
        <div className="row">
          <div className="col-sm-3" style={{ paddingRight: 0 }}>
            <button
              type="button"
              class="btn btn-light btn-sm"
              style={{
                position: "absolute",
                top: "50%",
                left: "30%",
                fontWeight: "bold"
              }}
            >
              Lihat Semua Brand
            </button>
            <img
              src="https://www.bukalapak.com/images/brand_pages/promoted-brand.jpg"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-sm-9" style={{ paddingLeft: 0 }}>
            <AliceCarousel
              dotsDisabled={true}
              responsive={responsive}
              buttonsDisabled={true}
              autoPlayInterval={2000}
              autoPlayDirection="ltr"
              autoPlay={true}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              items={this.state.galleryItems}
              ref={el => (this.Carousel = el)}
            />

            <nav>{this.items.map(this.thumbItem)}</nav>
          </div>
        </div>
      </div>
    );
  }
}
