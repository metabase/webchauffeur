"use strict";

var _renderer = require("css-to-xpath/js/renderer");

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xpathBuilder = require("xpath-builder").dsl(); /*
                                                   Copyright 2016 Metabase, Inc.
                                                   Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
                                                   
                                                   http://www.apache.org/licenses/LICENSE-2.0
                                                   
                                                   Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
                                                   */

_renderer2.default.prototype.contains = function (node) {
    return xpathBuilder.contains(node.func.args.selectors[0].name);
};

_renderer2.default.prototype.react = function (node) {
    return xpathBuilder.attr("_react_").equals(node.func.args.selectors[0].name);
};