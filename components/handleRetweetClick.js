import { tweetsData } from '../data.js'
import { render } from './render.js'

export function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    
    localStorage.setItem('tweetsData', JSON.stringify(tweetsData))
    
    render() 
}
