import { tweetsData } from '../data.js'
import { render } from './render.js'

export function handleSubmitReply(replyId){
    const replyInput = document.getElementById(`reply-input-${replyId}`)
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === replyId
    })[0]
    
    if(replyInput.value){
        const newReply = {
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            tweetText: replyInput.value
        }
        targetTweetObj.replies.unshift(newReply)
    }
    
    localStorage.setItem('tweetsData', JSON.stringify(tweetsData))
    
    render()
    replyInput.value = ''

}