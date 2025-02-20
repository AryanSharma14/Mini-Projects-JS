let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let userChoiceText = document.querySelector("#userChoiceText");
let compChoiceText = document.querySelector("#compChoiceText");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => {
  msg.innerText = "Game was draw";
  msg.style.backgroundColor = "gray";
};

const showChoices = (userChoice, compChoice) => {
  userChoiceText.innerText = `You chose ${userChoice}`;
  compChoiceText.innerText = `Computer chose ${compChoice}`;
}

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lose!";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    showChoices(userChoice, compChoice);
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showChoices(userChoice, compChoice);
    showWinner(userWin);
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});