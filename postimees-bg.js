document.querySelector("html").addEventListener("change", (event) => {
    var sponsored = document.querySelectorAll(".dfp-ad, .banner-container, #animation_container, .img_ad, #BinaarBanner, #google_image_div, .background, #Stage, .escobar-banner, .GoogleActiveViewElement, .animation_container, .list-article--commercial, .img_ad, .commercial-articles, .diamond__image , .adf-scroller, .dfp-ad, .digipakett-branding__container, .notification--cookie, .notifications-container, #background-11753060, .group-topic-with-custom-header--basic-logo-header, article[commercial-tag],.diamond, .group-topic-with-custom-header--topic")

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