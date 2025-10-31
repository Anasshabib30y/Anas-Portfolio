let user_score = 0;
let computer_score = 0;
let user_hand;
let computer_hand;
let round_result;
let user_output = document.getElementById("user-scored");
let computer_output = document.getElementById("computer-scored");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score_board = document.getElementById("score-board");
const result = document.getElementById("result")

rock.addEventListener('click',()=>{
    computerChoise();
    user_hand = "rock";
    calculatorRelult()
    changeColor();
})


paper.addEventListener('click',()=>{
    computerChoise();
    user_hand = "paper";
    calculatorRelult()
    changeColor();
})


scissors.addEventListener('click',()=>{
    computerChoise();
    user_hand = "scissors";
    calculatorRelult()
    changeColor();
})



function computerChoise(){
    let rondomNum = Math.floor(Math.random()*3+1);
    if (rondomNum == 0){
        computer_hand = "rock";
    }else if(rondomNum == 1){
        computer_hand = "paper";
    }else{
        computer_hand = "scissors";
    }
} 

function calculatorRelult(){
    if (
        (user_hand == 'paper' && computer_hand == 'rock') ||
        (user_hand == 'rock' && computer_hand == 'scissors') ||
        (user_hand == 'scissors' && computer_hand == 'paper')
    ) {
        user_score++;
        user_output.innerHTML = user_score;
        result.innerHTML =
            user_hand + "<sub>(user)</sub> beats " + computer_hand + "<sub>(computer)</sub>. You Win!";
        round_result = "You Win!";
    } else if (user_hand == computer_hand) {
        result.innerHTML = "Draw!";
        round_result = "Draw!";
    } else {
        computer_score++;
        computer_output.innerHTML = computer_score;
        result.innerHTML =
            computer_hand + "<sub>(computer)</sub> beats " + user_hand + "<sub>(user)</sub>. You Lose!";
        round_result = "You Lose!";
    }
    
}

function changeColor(){
    if ( round_result == "You Win!"){
        score_board.style.backgroundColor = "green";
    }else if(round_result == "You Lose!"){
        score_board.style.backgroundColor = "red";
    }else{
        score_board.style.backgroundColor = "blue";
    }
}