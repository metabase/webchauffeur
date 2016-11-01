"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Selector = exports.Driver = exports.Element = exports.Base = undefined;

var _dec, _dec2, _dec3, _dec4, _desc, _value, _class, _dec5, _dec6, _dec7, _desc2, _value2, _class2, _dec8, _dec9, _dec10, _desc3, _value3, _class3;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (wd) {
    var driver = new Driver(wd);
    wd.select = driver.select.bind(driver);
};

var _seleniumWebdriver = require("selenium-webdriver");

var _promiseChainDecorator = require("promise-chain-decorator");

var _promiseChainDecorator2 = _interopRequireDefault(_promiseChainDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

        // $FlowFixMe
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

var Element = exports.Element = (_dec = (0, _promiseChainDecorator2.default)(), _dec2 = (0, _promiseChainDecorator2.default)(), _dec3 = (0, _promiseChainDecorator2.default)(), _dec4 = (0, _promiseChainDecorator2.default)(), (_class = function (_Base) {
    _inherits(Element, _Base);

    function Element(driver, el) {
        _classCallCheck(this, Element);

        var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, driver));

        _this._el = el;
        return _this;
    }

    _createClass(Element, [{
        key: "el",
        value: function el() {
            return this._el;
        }
    }, {
        key: "click",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this._el.click();

                            case 2:
                                return _context.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function click() {
                return _ref.apply(this, arguments);
            }

            return click;
        }()
    }, {
        key: "sendKeys",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(keys) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this._el.sendKeys(keys);

                            case 2:
                                return _context2.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function sendKeys(_x) {
                return _ref2.apply(this, arguments);
            }

            return sendKeys;
        }()
    }, {
        key: "clear",
        value: function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this._el.clear();

                            case 2:
                                return _context3.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function clear() {
                return _ref3.apply(this, arguments);
            }

            return clear;
        }()
    }, {
        key: "blur",
        value: function () {
            var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this._el.sendKeys("\t");

                            case 2:
                                return _context4.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function blur() {
                return _ref4.apply(this, arguments);
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
}(Base), (_applyDecoratedDescriptor(_class.prototype, "click", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "click"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendKeys", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "sendKeys"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clear", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "clear"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "blur", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "blur"), _class.prototype)), _class));
var Driver = exports.Driver = (_dec5 = (0, _promiseChainDecorator2.default)(), _dec6 = (0, _promiseChainDecorator2.default)(), _dec7 = (0, _promiseChainDecorator2.default)(), (_class2 = function (_Element) {
    _inherits(Driver, _Element);

    function Driver(wd) {
        _classCallCheck(this, Driver);

        var _this2 = _possibleConstructorReturn(this, (Driver.__proto__ || Object.getPrototypeOf(Driver)).call(this, null, null));

        _this2._wd = wd;
        _this2._driver = _this2;
        return _this2;
    }

    _createClass(Driver, [{
        key: "get",
        value: function () {
            var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(url) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this._wd.get(url);

                            case 2:
                                return _context5.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function get(_x2) {
                return _ref5.apply(this, arguments);
            }

            return get;
        }()
    }, {
        key: "waitUrl",
        value: function () {
            var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(url) {
                var _this3 = this;

                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_TIMEOUT;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return this._wd.wait(_asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                        while (1) {
                                            switch (_context6.prev = _context6.next) {
                                                case 0:
                                                    _context6.next = 2;
                                                    return _this3._wd.getCurrentUrl();

                                                case 2:
                                                    _context6.t0 = _context6.sent;
                                                    _context6.t1 = url;
                                                    return _context6.abrupt("return", _context6.t0 === _context6.t1);

                                                case 5:
                                                case "end":
                                                    return _context6.stop();
                                            }
                                        }
                                    }, _callee6, _this3);
                                })), timeout);

                            case 2:
                                return _context7.abrupt("return", this);

                            case 3:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function waitUrl(_x3, _x4) {
                return _ref6.apply(this, arguments);
            }

            return waitUrl;
        }()
    }, {
        key: "deleteAllCookies",
        value: function () {
            var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                return _context8.abrupt("return", this._wd.deleteAllCookies());

                            case 1:
                            case "end":
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function deleteAllCookies() {
                return _ref8.apply(this, arguments);
            }

            return deleteAllCookies;
        }()
    }, {
        key: "el",
        value: function el() {
            return this._wd.findElement(_seleniumWebdriver.By.xpath("/*"));
        }
    }, {
        key: "css",
        value: function css(selector) {
            return new Selector(this._driver, this, _seleniumWebdriver.By.css(selector));
        }
    }, {
        key: "select",
        value: function select(selector) {
            return this.css(selector);
        }
    }]);

    return Driver;
}(Element), (_applyDecoratedDescriptor(_class2.prototype, "get", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "get"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "waitUrl", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "waitUrl"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "deleteAllCookies", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "deleteAllCookies"), _class2.prototype)), _class2));
var Selector = exports.Selector = (_dec8 = (0, _promiseChainDecorator2.default)(Element), _dec9 = (0, _promiseChainDecorator2.default)(Element), _dec10 = (0, _promiseChainDecorator2.default)(Element), (_class3 = function (_Base2) {
    _inherits(Selector, _Base2);

    function Selector(driver, parent, selector) {
        _classCallCheck(this, Selector);

        var _this4 = _possibleConstructorReturn(this, (Selector.__proto__ || Object.getPrototypeOf(Selector)).call(this, driver));

        _this4._parent = parent;
        _this4._selector = selector;
        return _this4;
    }

    _createClass(Selector, [{
        key: "wait",
        value: function () {
            var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                var _this5 = this;

                var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TIMEOUT;
                var element;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                _context9.next = 2;
                                return this.wd().wait(function () {
                                    return _this5._parent.el().findElement(_this5._selector);
                                }, timeout);

                            case 2:
                                element = _context9.sent;
                                return _context9.abrupt("return", new Element(this._driver, element));

                            case 4:
                            case "end":
                                return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));

            function wait(_x6) {
                return _ref9.apply(this, arguments);
            }

            return wait;
        }()
    }, {
        key: "waitText",
        value: function () {
            var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(expectedText) {
                var _this6 = this;

                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_TIMEOUT;
                var element;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                _context11.next = 2;
                                return this.wd().wait(_asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                                    var el;
                                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                        while (1) {
                                            switch (_context10.prev = _context10.next) {
                                                case 0:
                                                    el = _this6._parent.el().findElement(_this6._selector);
                                                    _context10.next = 3;
                                                    return el.getText();

                                                case 3:
                                                    _context10.t1 = _context10.sent;
                                                    _context10.t2 = expectedText;
                                                    _context10.t0 = _context10.t1 === _context10.t2;

                                                    if (!_context10.t0) {
                                                        _context10.next = 8;
                                                        break;
                                                    }

                                                    _context10.t0 = el;

                                                case 8:
                                                    return _context10.abrupt("return", _context10.t0);

                                                case 9:
                                                case "end":
                                                    return _context10.stop();
                                            }
                                        }
                                    }, _callee10, _this6);
                                })), timeout);

                            case 2:
                                element = _context11.sent;
                                return _context11.abrupt("return", new Element(this._driver, element));

                            case 4:
                            case "end":
                                return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));

            function waitText(_x8, _x9) {
                return _ref10.apply(this, arguments);
            }

            return waitText;
        }()
    }, {
        key: "find",
        value: function () {
            var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                var element;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                        switch (_context12.prev = _context12.next) {
                            case 0:
                                _context12.next = 2;
                                return this._parent.el().findElement(this._selector);

                            case 2:
                                element = _context12.sent;
                                return _context12.abrupt("return", new Element(this._driver, element));

                            case 4:
                            case "end":
                                return _context12.stop();
                        }
                    }
                }, _callee12, this);
            }));

            function find() {
                return _ref12.apply(this, arguments);
            }

            return find;
        }()
    }]);

    return Selector;
}(Base), (_applyDecoratedDescriptor(_class3.prototype, "wait", [_dec8], Object.getOwnPropertyDescriptor(_class3.prototype, "wait"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "waitText", [_dec9], Object.getOwnPropertyDescriptor(_class3.prototype, "waitText"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "find", [_dec10], Object.getOwnPropertyDescriptor(_class3.prototype, "find"), _class3.prototype)), _class3));