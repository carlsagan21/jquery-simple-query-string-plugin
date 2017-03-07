'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function ($) {
  $.QueryString = function (splitedParams) {
    if (splitedParams === '') return {};
    var result = {};
    splitedParams.forEach(function (param) {
      var indexOfEqual = param.indexOf('=');
      var key = param.slice(0, indexOfEqual);
      var value = decodeURIComponent(param.slice(indexOfEqual + 1).replace(/\+/g, ' '));
      result = _extends({}, result, _defineProperty({}, key, value));
    });
    return result;
  }(window.location.search.substr(1).split('&'));
})(jQuery);