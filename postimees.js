var sponsored = document.querySelectorAll(".GoogleActiveViewInnerContainer, #ad-container, .scroller, #Stage, .escobar-banner, .GoogleActiveViewElement, .animation_container, .list-article--commercial, .img_ad, .commercial-articles, .diamond__image , .adf-scroller, .dfp-ad, .digipakett-branding__container, .notification--cookie, .notifications-container, #background-11753060, .group-topic-with-custom-header--basic-logo-header, article[commercial-tag],.diamond, .group-topic-with-custom-header--topic")

sponsored.forEach(function(articleItem){
    articleItem.remove()
})
