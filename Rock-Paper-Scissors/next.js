let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const choices1 = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const comScorePara = document.querySelector("#computerScore");

const drawGame = () =>{
    msg.innerText = "It was a draw";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,compChoice,userChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    } else{
        computerScore++;
        comScorePara.innerText = computerScore;
        msg.innerText = `You Lose! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice=",userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice =",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false:true;
        } else{
            //rock,paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,compChoice,userChoice)
    }
}

choices.forEach((choice) => {
   
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});