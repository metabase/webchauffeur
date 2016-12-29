import Renderer from "css-to-xpath/js/renderer";
const xpathBuilder = require("xpath-builder").dsl();

Renderer.prototype.contains = function(node) {
    return xpathBuilder.contains(node.func.args.selectors[0].name);
};

Renderer.prototype.react = function(node) {
    return xpathBuilder.attr("_react_").equals(node.func.args.selectors[0].name);
};
