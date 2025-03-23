"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYMBOL = void 0;
exports["default"] = func;

var _number = require("./../../helper/number");

var _error = require("./../../error");

var SYMBOL = "/";
exports.SYMBOL = SYMBOL;

function func(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var result = rest.reduce(function (acc, value) {
    return acc / (0, _number.toNumber)(value);
  }, (0, _number.toNumber)(first));

  if (result === Infinity) {
    return _error.ERROR_DIV_ZERO; // throw Error(ERROR_DIV_ZERO);
  }

  if (isNaN(result)) {
    return _error.ERROR_VALUE; // throw Error(ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;