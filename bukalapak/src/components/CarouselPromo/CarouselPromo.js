import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class CarouselPromo extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      }
    };

    return (
      <div className="container-fluid">
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        buttonsDisabled={true}
        dotsDisabled={true}
        responsive={responsive}
        autoPlayInterval={2200}
        autoPlayDirection="rtl"
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="ml-2 mr-2 mt-2 mb-2">
          <img
            src="https://s1.bukalapak.com/uploads/flash_banner/18514/homepage_banner/s-834-352/1668x704_%286%29.jpg.webp"
            alt="banner"
            style={{ width: "100%" }}
          />
        </div>
        <div className="ml-2 mr-2 mt-2 mb-2">
          <img
            src="https://s1.bukalapak.com/uploads/flash_banner/11514/homepage_banner/s-834-352/Banner_A-B_Test_revmitra.jpg"
            alt="banner"
            style={{ width: "100%" }}
          />
        </div>
        <div className="ml-2 mr-2 mt-2 mb-2">
          <img
            src="https://s1.bukalapak.com/uploads/flash_banner/10514/homepage_banner/s-834-352/77Banner_A-B_Test.jpg.webp"
            alt="banner"
            style={{ width: "100%" }}
          />
        </div>
        <div className="ml-2 mr-2 mt-2 mb-2">
          <img
            src="https://s1.bukalapak.com/uploads/flash_banner/14514/homepage_banner/s-834-352/ab_test_ss.jpg.webp"
            alt="banner"
            style={{ width: "100%" }}
          />
        </div>
        <div className="ml-2 mr-2 mt-2 mb-2">
          <img
            src="https://s1.bukalapak.com/uploads/flash_banner/16514/homepage_banner/s-834-352/Banner_A-B_Test_-_3.jpg.webp"
            alt="banner"
            style={{ width: "100%" }}
          />
        </div>
        <div className="ml-2 mr-2 mt-2 mb-2">
          <img
            src="https://s1.bukalapak.com/uploads/flash_banner/12514/homepage_banner/s-834-352/Banner_A-B_Test_-_3terbaik77.jpg.webp"
            alt="banner"
            style={{ width: "100%" }}
          />
        </div>
        <div className="ml-2 mr-2 mt-2 mb-2">
          <img
            src="https://s1.bukalapak.com/uploads/flash_banner/13514/homepage_banner/s-834-352/nuBanner_A-B_Test_-_3.jpg.webp"
            alt="banner"
            style={{ width: "100%" }}
          />
        </div>
      </AliceCarousel>
      </div>
    );
  }
}

export default CarouselPromo;
