import { toNumber } from "./../../helper/number";
import { ERROR_VALUE } from "./../../error";
export var SYMBOL = "*";
export default function func(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var result = rest.reduce(function (acc, value) {
    return acc * toNumber(value);
  }, toNumber(first));

  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}
func.SYMBOL = SYMBOL;