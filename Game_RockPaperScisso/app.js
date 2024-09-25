let userScore =0;
let computerScore =0;
const choices=document.querySelectorAll(".choice");
const msgx=document.querySelector("#msg");
const User_score=document.querySelector("#user-score")
const Comp_score=document.querySelector("#comp-score")


const drawGame =()=>{
    console.log("game draw !")
    msgx.innerText = "Game was draw, Play again !";
    msgx.style.backgroundColor="#081b31";

};


const genCompChoice = ()=>{
    const option =["rock","paper","scissor"];
    const ranInx = Math.floor(Math.random()*3);
    return option[ranInx];
};
const showWinner = (userWin,userChoice,comChoice) =>{
    if(userWin){
        console.log("You Win !!")
        userScore++;
        User_score.innerText=userScore
        msgx.innerText= `You Win! Your ${userChoice} beats ${comChoice}`;
        msgx.style.backgroundColor="green";
        
        
    }else{
        console.log("You Lose")
        computerScore++;
        Comp_score.innerText=computerScore
        msgx.innerText =  `You Lost! ${comChoice} beats Your ${userChoice}`;
        msgx.style.backgroundColor="red";

    }
};
const playGame = (userChoice) =>{
console.log("user choice : ",userChoice)
//computer chioice generate
const comChoice = genCompChoice();
console.log("computer choice : ",comChoice)


if(userChoice=== comChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors,paper
       userWin=comChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock,scissor
        userWin = comChoice==="scissor"?false:true;
    }else {
        //paper,rock
        userWin=comChoice==="paper"?true:false;
    }
    showWinner(userWin,userChoice,comChoice);
}
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
})
