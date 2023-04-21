const container = document.querySelector(".buttons");
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

const scoreboard = document.querySelector(".scoreboard");
const gameStatus = document.createElement('p')
const runningScore = document.createElement('p')
const winner = document.createElement('p')

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

rock.classList.add('choice');
paper.classList.add('choice');
scissors.classList.add('choice');

function rng(){
    return RNum = Math.floor(Math.random()*100) + 1;
};

//computer choice ofc
function getComputerChoice(){
    const Rnum = rng()
    if (Rnum <= 33){
        return "rock";
    } else if (Rnum <= 66){
        return "paper";
    } else {
        return "scissors";
    };
};

//default metrics
let HuSe = 'rock';
let playerScore = 0;
let computerScore = 0;


//player selection
rock.addEventListener('click', function(){
    HuSe = 'rock';
    play();
});
paper.addEventListener('click', function(){
    HuSe = 'paper';
    play();
});
scissors.addEventListener('click', function(){
    HuSe = 'scissors';
    play();
});

//game
function play(){
    winner.textContent = '';
    const CoSe = getComputerChoice();
    
    if (HuSe === CoSe) {
        gameStatus.textContent = ("it's a tie!");
    }else if (HuSe === "rock" && CoSe === "paper" || HuSe === "paper" && CoSe === "scissors" || HuSe === "scissors" && CoSe === "rock"){
        computerScore++
        gameStatus.textContent = (`You Lose! ` + CoSe + ` beats ` + HuSe + `!`);
        endCheck();
    } else if (HuSe === "scissors" && CoSe === "paper" || HuSe === "rock" && CoSe === "scissors" || HuSe === "paper" && CoSe === "rock"){
        playerScore++
        gameStatus.textContent = (`You Win! ` + HuSe + ` beats ` + CoSe + `!`);
        endCheck();
    } else {
        gameStatus.textContent = ("how u even manage to mess this up -_-");
    };
    runningScore.textContent = `player: ${playerScore} computer: ${computerScore}`;
};

function endCheck(){if(playerScore === 5){
    winner.textContent = "player wins first to 5!";
    playerScore = 0;
    computerScore = 0;
}else if(computerScore === 5){
    winner.textContent = "computer wins first to 5!";
    playerScore = 0;
    computerScore = 0;
}else{
    return;
};
};

container.append(rock, paper, scissors);
scoreboard.append(gameStatus, runningScore, winner);