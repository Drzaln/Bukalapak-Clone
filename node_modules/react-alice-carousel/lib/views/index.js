'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SlideInfo = require('./SlideInfo');

Object.keys(_SlideInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SlideInfo[key];
    }
  });
});

var _StageItem = require('./StageItem');

Object.keys(_StageItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StageItem[key];
    }
  });
});

var _DotsNavigation = require('./DotsNavigation');

Object.keys(_DotsNavigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DotsNavigation[key];
    }
  });
});

var _PlayPauseButton = require('./PlayPauseButton');

Object.keys(_PlayPauseButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PlayPauseButton[key];
    }
  });
});

var _PrevNextButton = require('./PrevNextButton');

Object.keys(_PrevNextButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PrevNextButton[key];
    }
  });
});