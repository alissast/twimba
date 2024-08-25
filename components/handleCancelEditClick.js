import { tweetsData } from '../data.js'

export function handleCancelEditClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    const currentTweetContent = document.getElementById(`tweet-text-container-${tweetId}`)
    
    currentTweetContent.innerHTML =
    `<p class="tweet-text" id="tweet-text-${targetTweetObj.uuid}">${targetTweetObj.tweetText}</p>`
}