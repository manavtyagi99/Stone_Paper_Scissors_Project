let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#computer-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const ranInd = Math.floor(Math.random() *3);
    return options[ranInd];
};

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "rgb(101, 100, 100)";
};

const showWinner = (userWin, userChoice, comChoice) =>{
    if(userWin){
     userScore++;
     userScorePara.innerText = userScore;
     msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
     msg.style.backgroundColor = "green";
    } else{
        comScore++;
        comScorePara.innerText = comScore;
     msg.innerText = `You lost : ${comChoice} beats your ${userChoice}`;
     msg.style.backgroundColor = "rgb(192, 34, 34)";
    }
 };


const playGame = (userChoice) =>{
    const comChoice = genCompChoice();

    if(userChoice === comChoice){
        drawGame();
    } else{
        let userWin = true;
        if( userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        } else if( userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;  
        } else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};


choices.forEach((choice) =>{ 
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});