var FILTERLIST = {
  urls: ['*://*.doubleclick.net/*', '*://www.google-analytics.com/*']
};

function listener(details) {
    console.log("Blocked: ", details.url);
    return {
      cancel: true
    };
}


  browser.webRequest.onBeforeRequest.addListener(
    listener,
    FILTERLIST,
    ["blocking"]
    );

