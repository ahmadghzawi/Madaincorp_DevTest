let playerSelectedMethod = "";
let computerSelectedMethod = "";

let strengthDeterminant = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};
let methods = Object.values(strengthDeterminant);

let result = "";

const chooseMethod = (selectedMethod) => {
  playerSelectedMethod = selectedMethod;
  let filteredMethods = methods.filter((method) => method !== selectedMethod);

  document.getElementById(selectedMethod).style.borderColor = "green";
  filteredMethods.forEach((method) => {
    document.getElementById(method).style.borderColor = "black";
  });

  document.getElementById("result").style.visibility = "hidden";
  document.getElementById("computer-choice").style.visibility = "hidden";
  document.getElementById("retry-btn").style.visibility = "hidden";
  document.getElementById("player-choice").style.visibility = "visible";
  document.getElementById("play-btn").style.visibility = "visible";

  document.getElementById("player-choice").innerHTML =
    "You chose " + playerSelectedMethod.toUpperCase();
};

const play = () => {
  computerSelectedMethod = methods[Math.floor(Math.random() * 3)];

  document.getElementById(computerSelectedMethod).style.borderColor = "red";

  document.getElementById("computer-choice").style.visibility = "visible";
  document.getElementById("result").style.visibility = "visible";
  document.getElementById("play-btn").style.visibility = "hidden";
  document.getElementById("retry-btn").style.visibility = "visible";

  if (strengthDeterminant[playerSelectedMethod] === computerSelectedMethod)
    result = "Computer wins";
  else if (strengthDeterminant[computerSelectedMethod] === playerSelectedMethod)
    result = "You WIN!";
  else result = "It is a draw";

  document.getElementById("computer-choice").innerHTML =
    "Computer chose " + computerSelectedMethod.toUpperCase();

  document.getElementById("result").innerHTML = result;
};

const retry = () => {
  methods.forEach((method) => {
    document.getElementById(method).style.borderColor = "black";
  });

  playerSelectedMethod = "";
  computerSelectedMethod = "";
  document.getElementById("play-btn").style.visibility = "hidden";
  document.getElementById("retry-btn").style.visibility = "hidden";
  document.getElementById("player-choice").style.visibility = "hidden";
  document.getElementById("computer-choice").style.visibility = "hidden";
  document.getElementById("result").style.visibility = "hidden";
};
