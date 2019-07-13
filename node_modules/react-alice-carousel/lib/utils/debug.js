"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = debug;
function debug() {
  if (window.__DEBUG__) {
    var _console;

    (_console = console).debug.apply(_console, arguments); 
    return arguments;
  }
}