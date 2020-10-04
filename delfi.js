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
    ".customblock"

]

var sponsored = document.querySelectorAll(tags.toString())

sponsored.forEach(function(articleItem){
    articleItem.remove()
})
