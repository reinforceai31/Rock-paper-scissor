let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
let msg = document.querySelector("#msg");
let userpoints = document.querySelector("#user-score");
let comppoints = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const option = ["rock","paper","scissor"];
    const optidx = Math.floor(Math.random()*3);
    return option[optidx];
}

const drawgame = () => {
    msg.innerText ="Game was draw, Play again.";
    msg.style.backgroundColor = "#f4a261";
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userpoints.innerText = userScore;
        msg.innerText ="You won!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comppoints.innerText = compScore;
        msg.innerText ="Computer won!";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) =>{
    console.log("user choice" , userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice" ,compChoice)

    if(compChoice === userChoice){
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true; 
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})