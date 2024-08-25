import { handleLikeClick } from './components/handleLikeClick.js'
import { handleRetweetClick } from './components/handleRetweetClick.js'
import { handleReplyClick } from './components/handleReplyClick.js'
import { handleTweetBtnClick } from './components/handleTweetBtnClick.js'
import { handleSubmitReply } from './components/handleSubmitReply.js'
import { handleTweetOptionsClick } from './components/handleTweetOptionsClick.js'
import { handleEditOptionClick } from './components/handleEditOptionClick.js'
import { handleDeleteOptionClick } from './components/handleDeleteOptionClick.js'
import { handleSaveEditClick } from './components/handleSaveEditClick.js'
import { handleCancelEditClick } from './components/handleCancelEditClick.js'
import { render } from './components/render.js'
import { tweetsData } from './data.js'

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }else if(e.target.dataset.replyBtn){
        handleSubmitReply(e.target.dataset.replyBtn)
    }else if(e.target.dataset.options){
        handleTweetOptionsClick(e.target.dataset.options)
    }else if(e.target.dataset.editOption){
        handleEditOptionClick(e.target.dataset.editOption)
    }else if(e.target.dataset.deleteOption){
        handleDeleteOptionClick(e.target.dataset.deleteOption)
    }else if(e.target.dataset.saveEdit){
        handleSaveEditClick(e.target.dataset.saveEdit)
    }else if(e.target.dataset.cancelEdit){
        handleCancelEditClick(e.target.dataset.cancelEdit)
    }
})

render()


console.log(tweetsData)