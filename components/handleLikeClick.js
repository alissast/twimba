import { tweetsData } from '../data.js'
import { render } from './render.js'

export function handleLikeClick(tweetId){ 
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++ 
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    
    localStorage.setItem('tweetsData', JSON.stringify(tweetsData))
    
    render()
}