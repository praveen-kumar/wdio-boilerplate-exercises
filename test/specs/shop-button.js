describe("Robots parts Emporium", () => {
  it("Should have the right title", () => {
    browser.url("http://127.0.0.1:8303");
    browser.elementClick()
    expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
    );
  });
});

// var webdriverio = require("webdriverio");
// var options = { desiredCapabilities: { browserName: "chrome" } };
// var client = webdriverio.remote(options);

// client
//   .init()
//   .url("http://127.0.0.1:8303")
//   .getTitle()
//   .then(function (title) {
//     console.log("Title is: " + title);
//   })
//   .click(".shop-callout a")
//   .getTitle()
//   .then(function (title) {
//     console.log("Url is: " + title);
//   })
//   .end();