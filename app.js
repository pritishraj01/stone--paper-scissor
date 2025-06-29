let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const userPoint=document.querySelector("#my-score");
const compPoint=document.querySelector("#machine-score");
const msg=document.querySelector(".msg");
const btn= document.querySelector(".btn");

const genCompChoice = ()=>{
    const options=["stone", "paper", "scissor"]
    const rndmidx=Math.floor(Math.random()*3);
    return options[rndmidx];
}

const showWinner= (userWin,userChoice,compChoice)=>{
    if (userWin){
      userScore++;
      userPoint.innerText=userScore;
      msg.innerText= "You Won!"
      msg.style.backgroundColor= "lime";
      msg.style.transition= "all 0.5s ease";
    }else{
      compScore++;
      compPoint.innerText=compScore;
      msg.innerText= "You Loose!"
      msg.style.backgroundColor= "red";
      msg.style.transition= "all 0.5s ease";
    }
}

const gameDraw= ()=>{
  msg.innerText= "Game draw";
  msg.style.backgroundColor= "yellow";
  msg.style.transition= "all 0.5s ease";
}

const playGame= (userChoice) =>{
  console.log("userchoice is:",userChoice);

  const compChoice= genCompChoice();
  console.log("computer choice is: ", compChoice);

  if(userChoice === compChoice){
    gameDraw();
  }else{
     let userWin= true;
     if(userChoice=== "stone"){
      userWin= compChoice=== "scissor"?true:false;
     }else if(userChoice=== "paper"){
      userWin= compChoice==="stone"?true:false
     }else{
      userWin= compChoice==="paper"?true:false
     }
     showWinner(userWin,userChoice,compChoice);
  }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
});

btn.addEventListener("click",()=>{
  userScore=0;
  compScore=0;
  userPoint.innerText=0;
  compPoint.innerText=0;
  msg.innerText= "Choose rock paper Scissor..."
  msg.style.backgroundColor= "#dda15e"
})