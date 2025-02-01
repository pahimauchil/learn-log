'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); // # is for id , . is for classes
//another way
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let scores, currentScore,activePlayer,playing;

//Starting conditions
const init = function(){
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

scores = [0,0];
currentScore = 0;
activePlayer = 0;
playing = true;

diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
current0El.classList.remove('player--active');
current1El.classList.remove('player--active');
}
init();
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');   //is class is there it removes it and vise-versa
        player1El.classList.toggle('player--active'); 
}

//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(playing){
    // 1.Generating a random dice roll
    const dice  = Math.trunc(Math.random()*6)+1;

    // 2.Displaying the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check if dice for 1(if not add score)
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        //switch to next player
        switchPlayer();
    }
}
})
    btnHold.addEventListener('click',function(){
        if(playing){
        // 1.Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; 

        //2.Check if player's score is >=100
        if(scores[activePlayer] >= 100){
             diceEl.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);

        }else{
            switchPlayer();
        }
    }

    })
    btnNew.addEventListener('click',init)