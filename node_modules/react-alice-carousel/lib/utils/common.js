'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateInitialProps = exports.setTotalItemsInSlide = undefined;

var _index = require('./index');

var Utils = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setTotalItemsInSlide = exports.setTotalItemsInSlide = function setTotalItemsInSlide(responsiveConfig, childrenLength) {
  var items = 1;
  if (responsiveConfig) {
    var configKeys = Object.keys(responsiveConfig);

    if (configKeys.length) {
      configKeys.forEach(function (width) {
        if (width < window.innerWidth) {
          items = Math.min(responsiveConfig[width].items, childrenLength) || items;
        }
      });
    }
  }
  return items;
};

var calculateInitialProps = exports.calculateInitialProps = function calculateInitialProps(props, rootComponent) {
  var startIndex = props.startIndex,
      responsive = props.responsive,
      infinite = props.infinite;

  var style = Utils.getDefaultStyles();
  var slides = Utils.getSlides(props);
  var stagePadding = Utils.getStagePadding(props);
  var items = setTotalItemsInSlide(responsive, slides.length);
  var currentIndex = Utils.setStartIndex(slides.length, startIndex);
  var galleryWidth = Utils.getElementWidth(rootComponent);
  var itemWidth = Utils.getItemWidth(galleryWidth, items);
  var clones = Utils.cloneCarouselItems(slides, items, { stagePadding: stagePadding, infinite: infinite });
  var translate3d = Utils.getTranslate3dPosition(currentIndex, { itemWidth: itemWidth, items: items, stagePadding: stagePadding, infinite: infinite });

  return {
    items: items,
    itemWidth: itemWidth,
    currentIndex: currentIndex,
    slides: slides,
    clones: clones,
    infinite: infinite,
    translate3d: translate3d,
    stagePadding: stagePadding,
    style: style
  };
};