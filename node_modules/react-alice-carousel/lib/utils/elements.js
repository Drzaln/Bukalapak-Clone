'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentIndex = exports.getNextItemIndexBeforeTouchEnd = exports.isElement = exports.getSlideInfo = exports.getGalleryItemHeight = exports.getNextItem = exports.getItemWidth = exports.isStagePadding = exports.getStagePadding = exports.itemInfo = exports.getSlides = exports.getElementWidth = exports.cloneCarouselItems = undefined;
exports.getElementDimensions = getElementDimensions;
exports.shouldHandleResizeEvent = shouldHandleResizeEvent;

var _index = require('./index');

var Utils = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var cloneCarouselItems = exports.cloneCarouselItems = function cloneCarouselItems() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var itemsInSlide = arguments[1];
  var props = arguments[2];

  var items = itemsInSlide || 1;

  var _ref = props || {},
      stagePadding = _ref.stagePadding,
      infinite = _ref.infinite;

  var _ref2 = stagePadding || {},
      paddingLeft = _ref2.paddingLeft,
      paddingRight = _ref2.paddingRight;

  if (items > children.length) {
    items = children.length;
  }

  if (infinite) {
    if (paddingLeft || paddingRight) {
      if (itemsInSlide < children.length) {
        items = itemsInSlide + 1;
      } else {
        var lastElement = children.slice(-1);
        var firstElement = children.slice(0, 1);
        var _clonesBefore = lastElement.concat(children);
        var _clonesAfter = children.concat(firstElement);

        return [].concat(_clonesBefore, children, _clonesAfter);
      }
    }
  }

  var clonesAfter = children.slice(0, items);
  var clonesBefore = children.slice(children.length - items);

  return [].concat(clonesBefore, children, clonesAfter);
};

var getElementWidth = exports.getElementWidth = function getElementWidth(element) {
  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect().width;
  }
};

var getSlides = exports.getSlides = function getSlides(props) {
  var _ref3 = props || {},
      children = _ref3.children,
      _ref3$items = _ref3.items,
      items = _ref3$items === undefined ? [] : _ref3$items;

  return children && children.length ? children : items;
};

var itemInfo = exports.itemInfo = function itemInfo(props) {
  var _ref4 = props || {},
      items = _ref4.items,
      currentIndex = _ref4.currentIndex,
      infinite = _ref4.infinite,
      _ref4$slides = _ref4.slides,
      slides = _ref4$slides === undefined ? [] : _ref4$slides;

  var isPrevSlideDisabled = infinite === false && currentIndex === 0;
  var isNextSlideDisabled = infinite === false && slides.length - items === currentIndex;

  return { isPrevSlideDisabled: isPrevSlideDisabled, isNextSlideDisabled: isNextSlideDisabled };
};

var getStagePadding = exports.getStagePadding = function getStagePadding(props) {
  var _ref5 = props || {},
      _ref5$stagePadding = _ref5.stagePadding,
      stagePadding = _ref5$stagePadding === undefined ? {} : _ref5$stagePadding;

  var paddingLeft = Math.abs(stagePadding.paddingLeft) || 0;
  var paddingRight = Math.abs(stagePadding.paddingRight) || 0;

  return { paddingLeft: paddingLeft, paddingRight: paddingRight };
};

var isStagePadding = exports.isStagePadding = function isStagePadding() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref6 = props.stagePadding || {},
      paddingLeft = _ref6.paddingLeft,
      paddingRight = _ref6.paddingRight;

  return paddingLeft || paddingRight;
};

var getItemWidth = exports.getItemWidth = function getItemWidth() {
  var galleryWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var totalItems = arguments[1];

  var width = Number(galleryWidth);
  var items = Number(totalItems);
  return width && items > 0 ? width / items : 0;
};

var getNextItem = exports.getNextItem = function getNextItem(stageComponent, itemIndex) {
  var children = stageComponent && stageComponent.children || [];
  return children[itemIndex] && children[itemIndex].firstChild || null;
};

var getGalleryItemHeight = exports.getGalleryItemHeight = function getGalleryItemHeight(stageComponent, props, state) {
  var currentIndex = state.currentIndex;

  var slidesOffset = Utils.calculateSlidesOffset(props, state);
  var itemIndex = Utils.getIndexForItemHeightCalculation(currentIndex, slidesOffset);
  var element = getNextItem(stageComponent, itemIndex);

  if (isElement(element)) {
    var styles = getComputedStyle(element);
    var marginTop = parseFloat(styles['marginTop']);
    var marginBottom = parseFloat(styles['marginBottom']);

    return Math.ceil(element.offsetHeight + marginTop + marginBottom);
  }
};

var getSlideInfo = exports.getSlideInfo = function getSlideInfo() {
  var currentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var slidesLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var slideIndex = currentIndex + 1;

  if (slideIndex < 1) {
    slideIndex = slidesLength;
  } else if (slideIndex > slidesLength) {
    slideIndex = 1;
  }

  return { slideIndex: slideIndex, slidesLength: slidesLength };
};

var isElement = exports.isElement = function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
};

var getNextItemIndexBeforeTouchEnd = exports.getNextItemIndexBeforeTouchEnd = function getNextItemIndexBeforeTouchEnd(currentTranslateXPosition) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var infinite = props.infinite,
      _props$items = props.items,
      items = _props$items === undefined ? 1 : _props$items,
      _props$itemWidth = props.itemWidth,
      itemWidth = _props$itemWidth === undefined ? 0 : _props$itemWidth,
      _props$slides = props.slides,
      slides = _props$slides === undefined ? [] : _props$slides,
      _props$stagePadding = props.stagePadding,
      stagePadding = _props$stagePadding === undefined ? {} : _props$stagePadding;
  var paddingLeft = stagePadding.paddingLeft,
      paddingRight = stagePadding.paddingRight;


  if (itemWidth <= 0 || items > slides.length) {
    return 0;
  }

  var currentIndex = getCurrentIndex(currentTranslateXPosition, itemWidth, items);

  if (infinite && (paddingLeft || paddingRight)) {
    currentIndex -= 1;
  }

  if (currentIndex === slides.length) {
    return 0;
  }

  if (currentIndex < 0) {
    return slides.length + currentIndex;
  }

  return currentIndex;
};

var getCurrentIndex = exports.getCurrentIndex = function getCurrentIndex(currentTranslateXPosition, itemWidth, items) {
  var value = Math.abs(currentTranslateXPosition / itemWidth);
  return Math.ceil(value) - items;
};

function getElementDimensions(element) {
  var dimensions = {};

  if (element) {
    dimensions['clientWidth'] = element.clientWidth;
    dimensions['clientHeight'] = element.clientHeight;
  }
  return dimensions;
}

function shouldHandleResizeEvent(e) {
  var prevDimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var currentDimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return prevDimensions.clientWidth !== currentDimensions.clientWidth || prevDimensions.clientHeight !== currentDimensions.clientHeight;
}