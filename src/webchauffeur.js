/*
Copyright 2016 Metabase, Inc.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/* @flow */

import { WebDriver, WebElement, By } from "selenium-webdriver";

import chain from "promise-chain-decorator";
import fs from "mz/fs";
import path from "path";

import cssToXpath from "css-to-xpath";
import "./css-to-xpath-addons";

const DEFAULT_TIMEOUT = 5000;

export class Base {
    _driver: Driver;
    constructor(driver: Driver) {
        this._driver = driver;
    }
    wd(): WebDriver {
        return this._driver._wd;
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

    @chain(() => Element)
    async wait(timeout: ?number = DEFAULT_TIMEOUT): Promise<Element> {
        // const element = await this.wd().wait(until.elementLocated(this._selector), timeout);
        const element = await this.wd().wait(() => {
            return this._parent.el().findElement(this._selector)
        }, timeout);
        return new Element(this._driver, this._parent, this._selector, element);
    }

    @chain(() => Element)
    async waitText(expectedText: string, timeout: ?number = DEFAULT_TIMEOUT): Promise<Element> {
        const element = await this.wd().wait(async () => {
            const el = this._parent.el().findElement(this._selector);
            return (await el.getText()) === expectedText && el;
        }, timeout);
        return new Element(this._driver, this._parent, this._selector, element);
    }

    async waitRemoved(expectedText: string, timeout: ?number = DEFAULT_TIMEOUT): Promise<void> {
        await this.wd().wait(async () => {
            const el = await this._parent.el().findElements(this._selector);
            return !el || el.length === 0;
        }, timeout);
    }

    @chain(() => Element)
    async find(): Promise<Element> {
        const element = await this._parent.el().findElement(this._selector);
        return new Element(this._driver, this._parent, this._selector, element);
    }
}

export class Element extends Selector {
    _el: WebElement;

    constructor(driver: Driver, parent: Element, selector: By, el: WebElement) {
        super(driver, parent, selector);
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

type DriverOptions = {
    base: string,
    react: bool,
};

type ScreenshotOptions = {
    hideSelectors?: string[]
}

export class Driver extends Element {
    _wd: WebDriver;
    _options: DriverOptions;

    constructor(wd: WebDriver, options?: DriverOptions) {
        // $FlowFixMe
        super(null, null, By.xpath("/*"), wd.findElement(By.xpath("/*")));
        this._wd = wd;
        this._driver = this;
        this._options = {
            base: "",
            react: true,
            ...options
        };
    }

    _url(url: string): string {
        if (/^https?:\/\//.test(url)) {
            return url;
        } else {
            return this._options.base + url;
        }
    }

    @chain()
    async get(url: string): Promise<Driver> {
        await this._wd.get(this._url(url));
        if (this._options.react) {
            await this._installAnnotateReactDOM();
        }
        return this;
    }

    @chain()
    async waitUrl(url: string, timeout: ?number = DEFAULT_TIMEOUT): Promise<Driver> {
        url = this._url(url);
        await this._wd.wait(async () => {
            return await this._wd.getCurrentUrl() === url
        }, timeout);
        return this;
    }

    el(): WebElement {
        return this._wd.findElement(By.xpath("/*"));
    }

    css(css: string): Selector {
        return new Selector(this._driver, this, By.css(css));
    }

    xpath(xpath: string): Selector {
        return new Selector(this._driver, this, By.xpath(xpath));
    }

    select(enhancedCss: string): Selector {
        const xpath = cssToXpath(enhancedCss);
        return this.xpath(xpath);
    }

    sleep(milliseconds: number): Promise<void> {
        return this._wd.sleep(milliseconds);
    }

    executeScript<T>(script: string, ...varArgs: any[]): Promise<T> {
        return this._wd.executeScript(script, ...varArgs);
    }

    async loadModule(moduleName: string, globalName?: string): Promise<void> {
        const modulePath = require.resolve(moduleName);
        const moduleSource = await fs.readFile(modulePath, "utf-8");
        const exportsSource = globalName ? `window[${JSON.stringify(globalName)}] = {}` : `{}`;
        await this.executeScript(`(function(exports) {\n${moduleSource}\n})(${exportsSource});`);
    }

    async _installAnnotateReactDOM(): Promise<void> {
        await this.loadModule("annotate-react-dom", "AnnotateReactDOM");
        await this.executeScript("AnnotateReactDOM.installSynchronousAnnotator(document, { attribute: '_react_'});")
    }

    async screenshot(filename: string, { hideSelectors }: ScreenshotOptions = {}): Promise<void> {
        const dir = path.dirname(filename);
        if (dir && !(await fs.exists(dir))){
            await fs.mkdir(dir);
        }

        // hide non-deterministic elements
        if (hideSelectors && hideSelectors.length > 0) {
            await this.executeScript(`
                for (var i = 0; i < arguments.length; i++) {
                    var elements = document.querySelectorAll(arguments[i]);
                    for (var j = 0; j < elements.length; j++) {
                        elements[j].style.visibility = "hidden";
                    }
                }
            `, ...hideSelectors);
        }

        // blur input focus to avoid capturing blinking cursor in diffs
        await this.executeScript(`document.activeElement.blur();`);

        const image = await this._wd.takeScreenshot();
        await fs.writeFile(filename, image, 'base64');
    }

    quit(): Promise<void> {
        return this._wd.quit();
    }
}

type WebDriverEnhanced = {
    select: (selector: string) => Selector
};

export default function(wd: WebDriver & WebDriverEnhanced) {
    let driver = new Driver(wd);
    wd.select = driver.select.bind(driver);
}
