import { tweetsData } from '../data.js'
import { render } from './render.js'

export function handleDeleteOptionClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    let isConfirmed = confirm("Are you sure you want to delete this Tweet?")
    if(isConfirmed){
        tweetsData.shift(targetTweetObj)
    }
    
    localStorage.setItem('tweetsData', JSON.stringify(tweetsData))
    
    render()
}
