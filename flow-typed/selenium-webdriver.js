declare module "selenium-webdriver" {

    declare class WebDriver {
        executeScript<T>(script: string, varArgs: any[]): Promise<T>;
        findElement(selector: By): WebElementPromise;
        get(url: string): Promise<void>;
        getCurrentUrl(): Promise<string>;
        manage(): Options;
        quit(): Promise<void>;
        sleep(ms: number): Promise<void>;
        takeScreenshot(): Promise<string>;
        wait(condition: Condition|Function, timeout: ?number): WebElementPromise;
    }

    declare class Options {
        addCookie(spec: Cookie): Promise<void>;
        getCookie(name: string): Promise<?Cookie>;
        getCookies(): Promise<Cookie[]>;
        deleteAllCookies(): Promise<void>;
        deleteCookie(name: string): Promise<void>;
    }

    declare class Cookie {
        domain?: string,
        expiry?: Date|number,
        httpOnly?: bool,
        name: string,
        path?: string,
        secure?: bool,
        value: string
    }

    declare class WebElement {
        findElement(selector: By): WebElementPromise;
        findElements(selector: By): Promise<WebElement[]>;
        click(): Promise<void>;
        sendKeys(keys: string): Promise<void>;
        clear(): Promise<void>;
        getText(): Promise<string>;
        getAttribute(attribute: string): Promise<string>;
    }

    declare class WebElementPromise extends WebElement {
    }

    declare class Condition {
    }

    declare class By {
        static css(selector: string): By;
        static xpath(selector: string): By;
    }

    declare class until {
        static elementLocated(selector: By): Condition;
    }

    declare class Builder {
        forBrowser(browser: string): Builder;
        build(): WebDriver;
    }
}
