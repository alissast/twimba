import { tweetsData } from '../data.js'
import { currentUser } from './currentUser.js';

export function getFeedHtml(){
    let feedHtml = ``
    
    tweetsData.forEach(function(tweet){
        
        let likeIconClass = ''
        
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }
        
        let retweetIconClass = ''
        
        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }
        
        let repliesHtml = `
        <div class="reply-input-area">
			<textarea
                class="reply-textarea" 
                id="reply-input-${tweet.uuid}" 
                placeholder="Type your reply..." 
                data-reply-input="${tweet.uuid}"></textarea>
            <button
                class="reply-btn" 
                id="reply-btn-${tweet.uuid}" 
                data-reply-btn="${tweet.uuid}">Reply</button>
        </div>
        `
        
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
<div class="tweet-reply">
    <div class="tweet-reply-inner">
    </div>
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`
            })
        }
        
        
        let tweetOptions = ``
        if(tweet.handle === currentUser){
            tweetOptions = `
<i class="fa-solid fa-ellipsis"
    data-options="${tweet.uuid}"
    title="Tweet options"
    aria-label="Tweet options"
></i>
<div class="dropdown hidden" id="dropdown-${tweet.uuid}">
    <ul role="menu">
        <li role="menuitem" data-edit-option="${tweet.uuid}"><i class="fa-solid fa-pen-to-square"></i> Edit</li>
        <li role="menuitem" data-delete-option="${tweet.uuid}"><i class="fa-solid fa-trash"></i> Delete</li>
    </ul>
</div>
            `
        }
          
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <div class="tweet-header">
                <p class="handle">${tweet.handle}</p>
                ${tweetOptions}
            </div>
            <div id="tweet-text-container-${tweet.uuid}">
                <p class="tweet-text" id="tweet-text-${tweet.uuid}">${tweet.tweetText}</p>
            </div>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div>   
</div>
`
   })
   
   return feedHtml 
}