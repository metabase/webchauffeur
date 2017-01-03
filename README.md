# WebChauffeur

A fancy wrapper around [`selenium-webdriver`](https://www.npmjs.com/package/selenium-webdriver).

## Usage

```javascript
let driver = new Driver(new Builder().forBrowser("chrome").build());
await driver.get("http://www.metabase.com/");
await driver.select("a:contains(Download)").wait().click();
await driver.select(":react(MyReactComponent)").wait().click();
```

## License

Unless otherwise noted, all WebChauffeur source files are made available under the terms of the Apache License, Version 2.0.

See [LICENSE.txt](https://github.com/metabase/webchauffeur/blob/master/LICENSE.txt) for details and exceptions.

Unless otherwise noted, all files © 2016 Metabase, Inc.
