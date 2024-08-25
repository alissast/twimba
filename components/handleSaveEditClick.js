import { tweetsData } from '../data.js'
import { render } from './render.js'

export function handleSaveEditClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    let updatedText = document.getElementById(`tweet-input-edit-${tweetId}`).value

    if(updatedText.trim()){
        targetTweetObj.tweetText = updatedText.trim()
        
        localStorage.setItem('tweetsData', JSON.stringify(tweetsData))
        
        render()
    }else{
        document.getElementById(`edit-tweet-warning-text-${tweetId}`).classList.remove('hidden')
    }
}