import { tweetsData } from '../data.js'
import { currentUser } from './currentUser.js';

export function handleTweetOptionsClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    const dropdownMenu = document.getElementById(`dropdown-${tweetId}`)
    
    if (targetTweetObj.handle === currentUser){
        dropdownMenu.classList.toggle('hidden')
    }
    
    document.addEventListener('click', function(e){
        const isDropdownOpen = dropdownMenu.style.display !== 'hidden'
        const isClickOutsideDropdown = !dropdownMenu.contains(e.target) && !e.target.dataset.options
        if (isDropdownOpen && isClickOutsideDropdown){
            dropdownMenu.classList.add('hidden')
        }
    })
    
    // display a dropdown menu with options for delete and later edit if the icon has focus
}