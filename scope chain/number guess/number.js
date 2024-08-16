const randomNumber = 2;

const userInput = document.querySelector('#guess-field');
const submit = document.querySelector("#submit-button");
const totalGuess = document.querySelector(".guessedNumber");
const remainingGuess = document.querySelector(".attempt");
const message1 = document.querySelector(".lowhi");

let guess = [];
let playGame = true;
let startGuess = 1;


if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        const userGuess = Number(userInput.value);
        guess.push(userGuess);
        
        validate(userGuess);
    })
}

function validate(guess){
    if(isNaN(guess) || guess < 1 || guess>100){
        alert("please enter the valid number")
    }else{
        if(startGuess < 11){
            startGuess++;
            totalGuess.innerHTML += `${guess};`
            remainingGuess.innerHTML = `${11 - startGuess}`;
            check(guess);

        }
    }
}

function check(guess){
    if(guess<randomNumber){
        displayMessage(`The guess is too Low`)
    }else if(guess>randomNumber){
        displayMessage(`The guess is too High`)
    }else if(guess === randomNumber){

        displayMessage(`You guessed the correct number`)
        startGame();
    }
}

function displayMessage(message){
    message1.innerHTML = `<p>${message}<p>`;
    userInput.value= '';
}

function startGame(){
    const div = document.createElement('h5');
    div.classList.add('buttons')
    div.innerHTML = 'start the game again'
    message1.appendChild(div);
    reset();
    
}

function reset(){
    const buttons = document.querySelector('.buttons');
    buttons.addEventListener("click",(e)=>{
        totalGuess.innerHTML = '';
        remainingGuess.innerHTML = '10';
        message1.innerHTML='';
    })
}