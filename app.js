let userScore=0;
let compScore=0;


const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>
{
    console.log("Game was a draw... Play again..");
    msg.innerText = "It's a draw..";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreCount.innerText = userScore;
        
        msg.innerText = `You won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreCount.innerText =compScore;
      
        msg.innerText = `You lost! computers ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice );
    const compChoice= genCompChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock, scissors
             userWin = compChoice === "scissors" ? false : true; 
        }
        else {
            //when userchoice is scissors
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});