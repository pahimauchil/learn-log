'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct number🥳";


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 14;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //Input from user is always string
    // console.log(typeof guess);  - string
    //Thus use Number() funtion above to obtain the number


    //When there is no input
    if(!guess){
    //    document.querySelector('.message').textContent = `🤔 No Number!` ;
            displayMessage(`🤔 No Number!`);
   
       //When the player wins
    }else if(guess === secretNumber ){
        displayMessage(`Correct number🥳`);
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
}
//When guess is wrong
else if(guess !== secretNumber){
    if(score>1){
        displayMessage( guess>secretNumber? `☝️ Too High!`:`👇 Too Low!`);
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = `👎You lost the game!`; 
        document.querySelector('.score').textContent = score;
}
}});
//     //When guess is high
//     else if(guess > secretNumber){
//         if(score>1){
//         document.querySelector('.message').textContent = `☝️ Too High!`;
//         score--;
//         document.querySelector('.score').textContent = score;
//     }else{
//         document.querySelector('.message').textContent = `👎You lost the game!`; 
//         document.querySelector('.score').textContent = score;       
   
//    //When guess is low
//     }}else if(guess < secretNumber ){
//         if(score>1){
//         document.querySelector('.message').textContent = `👇 Too Low!`;
//         score--;
//         document.querySelector('.score').textContent = score;
//     }else{
//         document.querySelector('.message').textContent = `👎You lost the game!`; 
//         document.querySelector('.score').textContent = score;       
//     }
// }});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
     displayMessage( `Start guessing...`);
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = '';
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
});