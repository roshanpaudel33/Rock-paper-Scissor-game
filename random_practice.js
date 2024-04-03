let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepar=document.querySelector("#user_score");
const computerScorepar=document.querySelector("#computer_score");
const genCompChoice=()=>{
    const options=["rocks","paper","scissor"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
};
// r0ck,paper,scissors
const drawGame=()=>{
    console.log("the game is draw");
    msg.innerText="game is draw";
    msg.style.backgroundColor="yellow";
}
const showWinner=(userWin,choiceId,compChoice)=>{
    if(userWin){
        console.log("you win the game");
        userscore++;
        userScorepar.innerText=userscore;
        msg.innerText=`you won!! your  ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you loss the game");
        computerscore++;
        computerScorepar.innerText=computerscore;
        msg.innerText=`you loss!! ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor="red";
    }
}

const playGame= (choiceId)=>{

console.log("user choice=",choiceId);
const compChoice=genCompChoice();
console.log("computer choice=",compChoice);
if (choiceId==compChoice){
    drawGame();
}
else{
    let userWin =true;
    if(choiceId==="rocks"){
        userWin = compChoice==="paper" ? false:true;
    }
    else if(choiceId==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }else{
       userWin= compChoice==="rocks"?false:true;
    }
    showWinner(userWin,choiceId,compChoice);
}


};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");

     playGame(choiceId)   
    });
});