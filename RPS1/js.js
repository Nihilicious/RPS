function rng(){
    return RNum = Math.floor(Math.random()*100) + 1;
};

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

function getPlayerChoice(){
    let playerInput = prompt("your choice:", "scissors");
    return playerInput.toLowerCase();
};

let playerScore = 0;
let computerScore = 0;

function game(){
    const CoSe = getComputerChoice();
    const HuSe = getPlayerChoice();
    console.log(HuSe + " " + CoSe);
    if (HuSe === CoSe) {
        round -= 1;
        console.log("it's a tie!");
    }else if (HuSe === "rock" && CoSe === "paper" || HuSe === "paper" && CoSe === "scissors" || HuSe === "scissors" && CoSe === "rock"){
        computerScore++
        console.log(`You Lose! ` + CoSe + ` beats ` + HuSe + `!`);
    } else if (HuSe === "scissors" && CoSe === "paper" || HuSe === "rock" && CoSe === "scissors" || HuSe === "paper" && CoSe === "rock"){
        playerScore++
        console.log(`You Win! ` + HuSe + ` beats ` + CoSe + `!`);
    } else {
        round -= 1;
        console.log("wrong input, try again");
    };
};
let round = 1;
let score = "";
for (round; round<=5; round++){
    game();
    if(round<5){
        score = ("you: " + playerScore + "," + "computer: " + computerScore);
        console.log(score);
    } else {
        score = ("you: " + playerScore + "," + "computer: " + computerScore);
        if (playerScore > computerScore){
            console.log(score);
            console.log("congratulations, you are victorious!");
        } else {
            console.log(score);
            console.log("lmao noob");
        };
    };
   

};