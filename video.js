const subscribe = document.getElementById('subscribe')
const comment = []
let counter = document.getElementById('commentsTitle')
const username = '@oranMazimpaka'
const commentButton = document.getElementById('submie')
const paste = document.getElementById('commentSection')
let commit = undefined
const commentValue = document.getElementById('addToList')

function comeent(){

 let input = document.getElementById('comment')
 let comments = document.createElement('div')
 let username = `<`
 document.body.appendChild(comments)
 
 comments.classList.add("commentSect")
 comments.innerHTML = input.value
 
 
}


function Switch(){
    
    
    if(subscribe.innerHTML === "Subscribe"){
        subscribe.innerHTML = "Subscribed"
        subscribe.style.backgroundColor = 'black'
        subscribe.style.color = 'white'
    }else{
        subscribe.innerHTML = "Subscribe"
    }
    
}
