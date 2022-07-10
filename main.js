
// localStorage.clicks = 0;   if you want the score to go to zero at start of timer
localStorage.count  = 0;
var intervalID
time();
postNumber();


function postNumber(){
    //displays new score
    let messageContainer = document.createElement('h1');
    let messageText = document.createTextNode(localStorage.clicks);
    messageContainer.appendChild(messageText);
    let score = document.getElementById('score');

    score.appendChild(messageContainer);
}

document.body.addEventListener('click',e=>{
    e.preventDefault()
    if(localStorage.count < 10){
        //updates count removes old number and displays new number
        localStorage.clicks = parseInt(localStorage.clicks) + 1;
        removeNumber();
        postNumber();
    }
})

function removeNumber(){
    //removes previous score
    let messageContainer = document.getElementsByTagName('h1')[0];
    let score = document.getElementById('score');

    score.removeChild(messageContainer)
}



//timer counter 
function count(){
    localStorage.count = parseInt(localStorage.count) + 1;
    postTimer();
}

function time(){
//timer
intervalID = setInterval(count, 1000);
setTimeout(clear,  11000)
}

function clear(){
    clearInterval(intervalID);
    removeTimer()
}

function postTimer(){
    removeTimer();
    let messageContainer = document.createElement('h2');
    let messageText = document.createTextNode(localStorage.count);
    messageContainer.appendChild(messageText);
    let timer = document.getElementById('timer');
    timer.appendChild(messageContainer);
}

function removeTimer(){
    if(document.getElementsByTagName('h2')[0]){
        let messageContainer =  document.getElementsByTagName('h2')[0];
        let timer = document.getElementById('timer');

        timer.removeChild(messageContainer)
    }
}