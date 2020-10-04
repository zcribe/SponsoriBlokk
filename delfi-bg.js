const tags = [
    ".adform-video-base ",
    ".adform-video-state-finished",
    "video-container",
    "#adf-scroller",
    "#cookie_ribbon",
    "iframe",
    "#delfi-adx-siteheader",
    ".adform-adbox",
    ".adfm-cube-vertical",
    ".customblock",
    ".ad-container",
    ".ad-cntn",
    ".sliding-ads"

]

document.querySelector("html").addEventListener("change", (event) => {
    var sponsored = document.querySelectorAll(tags.toString())

    sponsored.forEach(function(articleItem){
        articleItem.remove()
    })
})

var filterList = {urls:[
    '*://*.doubleclick.net/*',
    '*://*.postimees.ee/*',
    '*://www.google-analytics.com/*'
],}


function listener(details) {
    console.log("Blocked: ", details.url);
    return {
      cancel: true
    };
}

browser.webRequest.onBeforeRequest.addListener(
listener,
filterList,
["blocking"]
);