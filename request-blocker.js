import {FILTERLIST} from './constants'


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