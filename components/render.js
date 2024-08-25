import { getFeedHtml } from './feedHtml.js'

export function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}