/* @flow */

import { WebDriver, WebElement, By } from "selenium-webdriver";

import chain from "promise-chain-decorator";

const DEFAULT_TIMEOUT = 5000;

export class Base {
    _driver: Driver;
    constructor(driver: ?Driver) {
        // $FlowFixMe
        this._driver = driver;
    }
    wd(): WebDriver {
        return this._driver._wd;
    }
}

export class Element extends Base {
    _el: WebElement;

    constructor(driver: ?Driver, el: ?WebElement) {
        super(driver);
        this._el = el;
    }
    el() {
        return this._el;
    }
    @chain()
    async click(): Promise<Element> {
        await this._el.click();
        return this;
    }
    @chain()
    async sendKeys(keys: string): Promise<Element> {
        await this._el.sendKeys(keys);
        return this;
    }
    @chain()
    async clear(): Promise<Element> {
        await this._el.clear();
        return this;
    }
    @chain()
    async blur(): Promise<Element> {
        await this._el.sendKeys("\t");
        return this;
    }
    text(): Promise<string> {
        return this._el.getText();
    }
    attribute(name: string): Promise<?string> {
        return this._el.getAttribute(name);
    }
}

export class Driver extends Element {
    _wd: WebDriver;

    constructor(wd: WebDriver) {
        super(null, null);
        this._wd = wd;
        this._driver = this;
    }

    @chain()
    async get(url: String): Promise<Driver> {
        await this._wd.get(url);
        return this;
    }

    @chain()
    async waitUrl(url: String, timeout: ?number = DEFAULT_TIMEOUT): Promise<Driver> {
        await this._wd.wait(async () => {
            return await this._wd.getCurrentUrl() === url
        }, timeout);
        return this;
    }

    @chain()
    async deleteAllCookies(): Promise<Driver> {
        await this._wd.deleteAllCookies();
        return this;
    }

    el(): WebElement {
        return this._wd.findElement(By.xpath("/*"));
    }

    css(selector: string): Selector {
        return new Selector(this._driver, this, By.css(selector));
    }

    select(selector: string): Selector {
        return this.css(selector);
    }
}

export class Selector extends Base {
    _parent: Element;
    _selector: By;

    constructor(driver: Driver, parent: Element, selector: By) {
        super(driver);
        this._parent = parent;
        this._selector = selector;
    }

    @chain(Element)
    async wait(timeout: ?number = DEFAULT_TIMEOUT): Promise<Element> {
        // const element = await this.wd().wait(until.elementLocated(this._selector), timeout);
        const element = await this.wd().wait(() => {
            return this._parent.el().findElement(this._selector)
        }, timeout);
        return new Element(this._driver, element);
    }

    @chain(Element)
    async waitText(expectedText: string, timeout: ?number = DEFAULT_TIMEOUT): Promise<Element> {
        const element = await this.wd().wait(async () => {
            const el = this._parent.el().findElement(this._selector);
            return (await el.getText()) === expectedText && el;
        }, timeout);
        return new Element(this._driver, element);
    }

    @chain(Element)
    async find(): Promise<Element> {
        const element = await this._parent.el().findElement(this._selector);
        return new Element(this._driver, element);
    }
}

type WebDriverEnhanced = {
    select: (selector: string) => Selector
};

export default function(wd: WebDriver & WebDriverEnhanced) {
    let driver = new Driver(wd);
    wd.select = driver.select.bind(driver);
}
