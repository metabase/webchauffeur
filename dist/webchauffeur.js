"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Driver = exports.Element = exports.Selector = exports.Base = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _dec3, _desc, _value, _class, _dec4, _dec5, _dec6, _dec7, _desc2, _value2, _class2, _dec8, _dec9, _desc3, _value3, _class3;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Copyright 2016 Metabase, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

exports.default = function (wd) {
    var driver = new Driver(wd);
    wd.select = driver.select.bind(driver);
};

var _seleniumWebdriver = require("selenium-webdriver");

var _promiseChainDecorator = require("promise-chain-decorator");

var _promiseChainDecorator2 = _interopRequireDefault(_promiseChainDecorator);

var _fs = require("mz/fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _cssToXpath = require("css-to-xpath");

var _cssToXpath2 = _interopRequireDefault(_cssToXpath);

require("./css-to-xpath-addons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_TIMEOUT = 5000;

var Base = exports.Base = function () {
    function Base(driver) {
        _classCallCheck(this, Base);

        this._driver = driver;
    }

    _createClass(Base, [{
        key: "wd",
        value: function wd() {
            return this._driver._wd;
        }
    }]);

    return Base;
}();

var Selector = exports.Selector = (_dec = (0, _promiseChainDecorator2.default)(function () {
    return Element;
}), _dec2 = (0, _promiseChainDecorator2.default)(function () {
    return Element;
}), _dec3 = (0, _promiseChainDecorator2.default)(function () {
    return Element;
}), (_class = function (_Base) {
    _inherits(Selector, _Base);

    function Selector(driver, parent, selector) {
        _classCallCheck(this, Selector);

        var _this = _possibleConstructorReturn(this, (Selector.__proto__ || Object.getPrototypeOf(Selector)).call(this, driver));

        _this._parent = parent;
        _this._selector = selector;
        return _this;
    }

    _createClass(Selector, [{
        key: "wait",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TIMEOUT;
                var element;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.wd().wait(function () {
                                    return _this2._parent.el().findElement(_this2._selector);
                                }, timeout);

                            case 2:
                                element = _context.sent;
                                return _context.abrupt("return", new Element(this._driver, this._parent, this._selector, element));

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function wait() {
                return _ref.apply(this, arguments);
            }

            return wait;
        }()
    }, {
        key: "waitText",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(expectedText) {
                var _this3 = this;

                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_TIMEOUT;
                var element;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.wd().wait(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                                    var el;
                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                            switch (_context2.prev = _context2.next) {
                                                case 0:
                                                    el = _this3._parent.el().findElement(_this3._selector);
                                                    _context2.next = 3;
                                                    return el.getText();

                                                case 3:
                                                    _context2.t1 = _context2.sent;
                                                    _context2.t2 = expectedText;
                                                    _context2.t0 = _context2.t1 === _context2.t2;

                                                    if (!_context2.t0) {
                                                        _context2.next = 8;
                                                        break;
                                                    }

                                                    _context2.t0 = el;

                                                case 8:
                                                    return _context2.abrupt("return", _context2.t0);

                                                case 9:
                                                case "end":
                                                    return _context2.stop();
                                            }
                                        }
                                    }, _callee2, _this3);
                                })), timeout);

                            case 2:
                                element = _context3.sent;
                                return _context3.abrupt("return", new Element(this._driver, this._parent, this._selector, element));

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function waitText(_x2) {
                return _ref2.apply(this, arguments);
            }

            return waitText;
        }()
    }, {
        key: "waitRemoved",
        value: function () {
            var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(expectedText) {
                var _this4 = this;

                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_TIMEOUT;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.wd().wait(_asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                                    var el;
                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                        while (1) {
                                            switch (_context4.prev = _context4.next) {
                                                case 0:
                                                    _context4.next = 2;
                                                    return _this4._parent.el().findElements(_this4._selector);

                                                case 2:
                                                    el = _context4.sent;
                                                    return _context4.abrupt("return", !el || el.length === 0);

                                                case 4:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }
                                    }, _callee4, _this4);
                                })), timeout);

                            case 2:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function waitRemoved(_x4) {
                return _ref4.apply(this, arguments);
            }

            return waitRemoved;
        }()
    }, {
        key: "find",
        value: function () {
            var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                var element;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return this._parent.el().findElement(this._selector);

                            case 2:
                                element = _context6.sent;
                                return _context6.abrupt("return", new Element(this._driver, this._parent, this._selector, element));

                            case 4:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function find() {
                return _ref6.apply(this, arguments);
            }

            return find;
        }()
    }]);

    return Selector;
}(Base), (_applyDecoratedDescriptor(_class.prototype, "wait", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "wait"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "waitText", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "waitText"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "find", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "find"), _class.prototype)), _class));
var Element = exports.Element = (_dec4 = (0, _promiseChainDecorator2.default)(), _dec5 = (0, _promiseChainDecorator2.default)(), _dec6 = (0, _promiseChainDecorator2.default)(), _dec7 = (0, _promiseChainDecorator2.default)(), (_class2 = function (_Selector) {
    _inherits(Element, _Selector);

    function Element(driver, parent, selector, el) {
        _classCallCheck(this, Element);

        var _this5 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, driver, parent, selector));

        _this5._el = el;
        return _this5;
    }

    _createClass(Element, [{
        key: "el",
        value: function el() {
            return this._el;
        }
    }, {
        key: "click",
        value: function () {
            var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return this._el.click();

                            case 2:
                                return _context7.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function click() {
                return _ref7.apply(this, arguments);
            }

            return click;
        }()
    }, {
        key: "sendKeys",
        value: function () {
            var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(keys) {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _context8.next = 2;
                                return this._el.sendKeys(keys);

                            case 2:
                                return _context8.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function sendKeys(_x6) {
                return _ref8.apply(this, arguments);
            }

            return sendKeys;
        }()
    }, {
        key: "clear",
        value: function () {
            var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                _context9.next = 2;
                                return this._el.clear();

                            case 2:
                                return _context9.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));

            function clear() {
                return _ref9.apply(this, arguments);
            }

            return clear;
        }()
    }, {
        key: "blur",
        value: function () {
            var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                _context10.next = 2;
                                return this._el.sendKeys("\t");

                            case 2:
                                return _context10.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context10.stop();
                        }
                    }
                }, _callee10, this);
            }));

            function blur() {
                return _ref10.apply(this, arguments);
            }

            return blur;
        }()
    }, {
        key: "text",
        value: function text() {
            return this._el.getText();
        }
    }, {
        key: "attribute",
        value: function attribute(name) {
            return this._el.getAttribute(name);
        }
    }]);

    return Element;
}(Selector), (_applyDecoratedDescriptor(_class2.prototype, "click", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "click"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sendKeys", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "sendKeys"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clear", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "clear"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "blur", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "blur"), _class2.prototype)), _class2));
var Driver = (_dec8 = (0, _promiseChainDecorator2.default)(), _dec9 = (0, _promiseChainDecorator2.default)(), (_class3 = function (_Element) {
    _inherits(Driver, _Element);

    function Driver(wd, options) {
        _classCallCheck(this, Driver);

        var _this6 = _possibleConstructorReturn(this, (Driver.__proto__ || Object.getPrototypeOf(Driver)).call(this, null, null, _seleniumWebdriver.By.xpath("/*"), wd.findElement(_seleniumWebdriver.By.xpath("/*"))));
        // $FlowFixMe


        _this6._wd = wd;
        _this6._driver = _this6;
        _this6._options = _extends({
            base: "",
            react: true
        }, options);
        return _this6;
    }

    _createClass(Driver, [{
        key: "_url",
        value: function _url(url) {
            if (/^https?:\/\//.test(url)) {
                return url;
            } else {
                return this._options.base + url;
            }
        }
    }, {
        key: "get",
        value: function () {
            var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(url) {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                _context11.next = 2;
                                return this._wd.get(this._url(url));

                            case 2:
                                if (!this._options.react) {
                                    _context11.next = 5;
                                    break;
                                }

                                _context11.next = 5;
                                return this._installAnnotateReactDOM();

                            case 5:
                                return _context11.abrupt("return", this);

                            case 6:
                            case "end":
                                return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));

            function get(_x7) {
                return _ref11.apply(this, arguments);
            }

            return get;
        }()
    }, {
        key: "waitUrl",
        value: function () {
            var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(url) {
                var _this7 = this;

                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_TIMEOUT;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                url = this._url(url);
                                _context13.next = 3;
                                return this._wd.wait(_asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                        while (1) {
                                            switch (_context12.prev = _context12.next) {
                                                case 0:
                                                    _context12.next = 2;
                                                    return _this7._wd.getCurrentUrl();

                                                case 2:
                                                    _context12.t0 = _context12.sent;
                                                    _context12.t1 = url;
                                                    return _context12.abrupt("return", _context12.t0 === _context12.t1);

                                                case 5:
                                                case "end":
                                                    return _context12.stop();
                                            }
                                        }
                                    }, _callee12, _this7);
                                })), timeout);

                            case 3:
                                return _context13.abrupt("return", this);

                            case 4:
                            case "end":
                                return _context13.stop();
                        }
                    }
                }, _callee13, this);
            }));

            function waitUrl(_x8) {
                return _ref12.apply(this, arguments);
            }

            return waitUrl;
        }()
    }, {
        key: "el",
        value: function el() {
            return this._wd.findElement(_seleniumWebdriver.By.xpath("/*"));
        }
    }, {
        key: "css",
        value: function css(_css) {
            return new Selector(this._driver, this, _seleniumWebdriver.By.css(_css));
        }
    }, {
        key: "xpath",
        value: function xpath(_xpath) {
            return new Selector(this._driver, this, _seleniumWebdriver.By.xpath(_xpath));
        }
    }, {
        key: "select",
        value: function select(enhancedCss) {
            var xpath = (0, _cssToXpath2.default)(enhancedCss);
            return this.xpath(xpath);
        }
    }, {
        key: "sleep",
        value: function sleep(milliseconds) {
            return this._wd.sleep(milliseconds);
        }
    }, {
        key: "executeScript",
        value: function executeScript(script) {
            var _wd;

            for (var _len = arguments.length, varArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                varArgs[_key - 1] = arguments[_key];
            }

            return (_wd = this._wd).executeScript.apply(_wd, [script].concat(_toConsumableArray(varArgs)));
        }
    }, {
        key: "loadModule",
        value: function () {
            var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(moduleName, globalName) {
                var modulePath, moduleSource, exportsSource;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                        switch (_context14.prev = _context14.next) {
                            case 0:
                                modulePath = require.resolve(moduleName);
                                _context14.next = 3;
                                return _fs2.default.readFile(modulePath, "utf-8");

                            case 3:
                                moduleSource = _context14.sent;
                                exportsSource = globalName ? "window[" + JSON.stringify(globalName) + "] = {}" : "{}";
                                _context14.next = 7;
                                return this.executeScript("(function(exports) {\n" + moduleSource + "\n})(" + exportsSource + ");");

                            case 7:
                            case "end":
                                return _context14.stop();
                        }
                    }
                }, _callee14, this);
            }));

            function loadModule(_x10, _x11) {
                return _ref14.apply(this, arguments);
            }

            return loadModule;
        }()
    }, {
        key: "_installAnnotateReactDOM",
        value: function () {
            var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                        switch (_context15.prev = _context15.next) {
                            case 0:
                                _context15.next = 2;
                                return this.loadModule("annotate-react-dom", "AnnotateReactDOM");

                            case 2:
                                _context15.next = 4;
                                return this.executeScript("AnnotateReactDOM.installSynchronousAnnotator(document, { attribute: '_react_'});");

                            case 4:
                            case "end":
                                return _context15.stop();
                        }
                    }
                }, _callee15, this);
            }));

            function _installAnnotateReactDOM() {
                return _ref15.apply(this, arguments);
            }

            return _installAnnotateReactDOM;
        }()
    }, {
        key: "screenshot",
        value: function () {
            var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(filename) {
                var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    hideSelectors = _ref17.hideSelectors;

                var dir, image;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) {
                        switch (_context16.prev = _context16.next) {
                            case 0:
                                dir = _path2.default.dirname(filename);
                                _context16.t0 = dir;

                                if (!_context16.t0) {
                                    _context16.next = 6;
                                    break;
                                }

                                _context16.next = 5;
                                return _fs2.default.exists(dir);

                            case 5:
                                _context16.t0 = !_context16.sent;

                            case 6:
                                if (!_context16.t0) {
                                    _context16.next = 9;
                                    break;
                                }

                                _context16.next = 9;
                                return _fs2.default.mkdir(dir);

                            case 9:
                                if (!(hideSelectors && hideSelectors.length > 0)) {
                                    _context16.next = 12;
                                    break;
                                }

                                _context16.next = 12;
                                return this.executeScript.apply(this, ["\n                for (var i = 0; i < arguments.length; i++) {\n                    var elements = document.querySelectorAll(arguments[i]);\n                    for (var j = 0; j < elements.length; j++) {\n                        elements[j].style.visibility = \"hidden\";\n                    }\n                }\n            "].concat(_toConsumableArray(hideSelectors)));

                            case 12:
                                _context16.next = 14;
                                return this.executeScript("document.activeElement.blur();");

                            case 14:
                                _context16.next = 16;
                                return this._wd.takeScreenshot();

                            case 16:
                                image = _context16.sent;
                                _context16.next = 19;
                                return _fs2.default.writeFile(filename, image, 'base64');

                            case 19:
                            case "end":
                                return _context16.stop();
                        }
                    }
                }, _callee16, this);
            }));

            function screenshot(_x12) {
                return _ref16.apply(this, arguments);
            }

            return screenshot;
        }()
    }, {
        key: "quit",
        value: function quit() {
            return this._wd.quit();
        }
    }]);

    return Driver;
}(Element), (_applyDecoratedDescriptor(_class3.prototype, "get", [_dec8], Object.getOwnPropertyDescriptor(_class3.prototype, "get"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "waitUrl", [_dec9], Object.getOwnPropertyDescriptor(_class3.prototype, "waitUrl"), _class3.prototype)), _class3));
exports.Driver = Driver;