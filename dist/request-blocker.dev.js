"use strict";

function listener(details) {
  console.log("Blocked: ", details.url);
  return {
    cancel: true
  };
}

require(['/constants/constants.js'], function (constants) {
  browser.webRequest.onBeforeRequest.addListener(listener, constants.FILTERLIST, ["blocking"]);
});