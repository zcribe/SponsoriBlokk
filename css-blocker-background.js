import {TAGS} from './constants'

document.querySelector("html").addEventListener("change", (event) => {
    var sponsored = document.querySelectorAll(TAGS.toString())

    sponsored.forEach(function(articleItem){
        articleItem.remove()
    })
})