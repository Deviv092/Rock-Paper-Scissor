let userScore = 0;
let machineScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const machineScorePara = document.querySelector("#machine-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor = "#542e71";
};

const showWinner = (userWin, userChoice, machineChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won! >> your ${userChoice} beats ${machineChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    machineScore++;
    machineScorePara.innerText = machineScore;
    msg.innerText = `You Lost. >> ${machineChoice} beats your ${userChoice} `;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  //   generate computer choice
  const machineChoice = genCompChoice();
  if (userChoice === machineChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = machineChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = machineChoice === "scissor" ? false : true;
    } else {
      userWin = machineChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, machineChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Add the reset button functionality
document.getElementById("reset-button").addEventListener("click", function () {
  userScore = 0;
  machineScore = 0;
  userScorePara.innerText = userScore;
  machineScorePara.innerText = machineScore;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "";
});
