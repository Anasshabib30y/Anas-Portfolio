

let user_choice ='';
let computer_choice;

let user_score = 0;
let computer_score = 0;

let heads = document.querySelector('.heads');
let tails = document.querySelector('.tails');

let user_score_span = document.getElementById('userـscore');
let computer_score_span = document.getElementById('computerـscore');


heads.addEventListener('click', ()=>{
    Computer_choice()
    Checkchoices(user_choice);
    user_choice = 'heads';

})

tails.addEventListener('click', ()=>{
    Computer_choice()
    Checkchoices(user_choice);
    user_choice = 'tails';
   
})

function Computer_choice(){

    computer_choice = Math.floor(Math.random()*2+1);

    if ( computer_choice == 1 ){
        computer_choice = 'heads';
    }else{
        computer_choice = 'tails';
    }

}

function Checkchoices(user_choice){
    if( user_choice == computer_choice){
        user_score++;
        user_score_span.innerHTML = user_score;
        CheckMassege(`<i>Nice man ! you win</i>`)
        document.body.style.backgroundColor = 'green';
    }else{
        computer_score++;
        computer_score_span.innerHTML = computer_score;
        document.body.style.backgroundColor = 'red';
        CheckMassege(`<i>Bad man ! you lose</i>`)
    }

   
}

function CheckMassege(massege){
    document.querySelector('.rule').innerHTML = massege;
}

