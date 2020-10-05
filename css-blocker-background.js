const TAGS = [
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
    // Postimees
    ".GoogleActiveViewInnerContainer",
    "#ad-container",
    ".scroller",
    "#Stage",
    ".escobar-banner",
    ".GoogleActiveViewElement",
    ".animation_container",
    ".list-article--commercial",
    ".img_ad", ".commercial-articles",
    ".diamond__image",
    ".adf-scroller",
    ".dfp-ad",
    ".digipakett-branding__container",
    ".notification--cookie",
    ".notifications-container",
    "#background-11753060",
    ".group-topic-with-custom-header--basic-logo-header",
    "article[commercial-tag]",
    ".diamond",
    ".group-topic-with-custom-header--topic",
    ".section-branding-container",
    "article[commercial-tag]"
]


document.querySelector("html").addEventListener("change", (event) => {
        var sponsored = document.querySelectorAll(TAGS.toString())

        sponsored.forEach(function(articleItem){
            articleItem.remove()
        })
    })


