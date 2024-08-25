import { tweetsData } from '../data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { render } from './render.js'

export function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input')

    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        
    localStorage.setItem('tweetsData', JSON.stringify(tweetsData))
    
    render()
    tweetInput.value = ''
    }

}