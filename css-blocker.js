import {TAGS} from './constants'

let sponsored = document.querySelectorAll(TAGS.toString())

sponsored.forEach(function (articleItem) {
    articleItem.remove()
})