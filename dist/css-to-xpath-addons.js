"use strict";

var _renderer = require("css-to-xpath/js/renderer");

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xpathBuilder = require("xpath-builder").dsl();

_renderer2.default.prototype.contains = function (node) {
    return xpathBuilder.contains(node.func.args.selectors[0].name);
};

_renderer2.default.prototype.react = function (node) {
    return xpathBuilder.attr("_react_").equals(node.func.args.selectors[0].name);
};