let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let firstDiceImage = document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
let secondDiceImage = document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

let resultsHeading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  resultsHeading.innerText = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  resultsHeading.innerText = "Player 2 Wins! 🚩";
} else {
  resultsHeading.innerText = "Draw!";
}


