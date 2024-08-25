import { tweetsData } from '../data.js'
import { render } from './render.js'

export function handleEditOptionClick(tweetId){

    document.getElementById(`dropdown-${tweetId}`).classList.add('hidden')
    
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    const currentTweetContent = document.getElementById(`tweet-text-container-${tweetId}`)
    
    currentTweetContent.innerHTML = 
    `
    	<div class="edit-tweet-container">
            <div class="edit-tweet-textarea-container">
    			<textarea class="edit-tweet-textarea" placeholder="" id="tweet-input-edit-${tweetId}">${targetTweetObj.tweetText}</textarea>
                <p class="hidden edit-tweet-warning-text" id="edit-tweet-warning-text-${tweetId}">Tweet text must not be empty.</p>
            </div>
            <div class="tweet-edit-btn-container">
                <button class="save-edit-btn edit-btn" data-save-edit="${tweetId}">Save</button>
                <button class="cancel-edit-btn edit-btn" data-cancel-edit="${tweetId}">Cancel</button>
            </div>
		</div>
    `
}
