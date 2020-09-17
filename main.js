let playerSelectedMethod = "";
let computerSelectedMethod = "";

let methods = ["rock", "paper", "scissors"];
let strengthDeterminant = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

const setElementProperties = (elements, attributes, value) => {
  switch (attributes.length) {
    case 2:
      elements.forEach((element) => (document.getElementById(element)[attributes[0]][attributes[1]] = value));
      break;

    case 1:
    default:
      elements.forEach((element) => (document.getElementById(element)[attributes[0]] = value));
  }
};

const determineResult = () => {
  if (strengthDeterminant[playerSelectedMethod] === computerSelectedMethod) {
    setElementProperties(["result"], ["style", "color"], "red");
    return "Computer wins";
  }

  if (strengthDeterminant[computerSelectedMethod] === playerSelectedMethod) {
    setElementProperties(["result"], ["style", "color"], "green");
    return "You WIN!";
  }

  setElementProperties(["result"], ["style", "color"], "black");
  return "It is a draw";
};

const chooseMethod = (selectedMethod) => {
  playerSelectedMethod = selectedMethod;
  let filteredMethods = methods.filter((method) => method !== selectedMethod);

  setElementProperties([selectedMethod], ["style", "borderColor"], "green");
  setElementProperties(filteredMethods, ["style", "borderColor"], "black");
  setElementProperties(["result", "computer-choice"], ["style", "visibility"], "hidden");
  setElementProperties(["player-choice"], ["style", "visibility"], "visible");
  setElementProperties(["retry-btn"], ["disabled"], true);
  setElementProperties(["play-btn"], ["disabled"], false);
  setElementProperties(["player-choice"], ["innerHTML"], "You chose " + playerSelectedMethod.toUpperCase());
};

const play = () => {
  computerSelectedMethod = methods[Math.floor(Math.random() * 3)];

  setElementProperties(["result", "computer-choice"], ["style", "visibility"], "visible");
  setElementProperties([computerSelectedMethod], ["style", "borderColor"], "red");
  setElementProperties(["computer-choice"], ["innerHTML"], "Computer chose " + computerSelectedMethod.toUpperCase());
  setElementProperties(["retry-btn"], ["disabled"], false);
  setElementProperties(["play-btn"], ["disabled"], true);
  setElementProperties(["result"], ["innerHTML"], determineResult());
};

const retry = () => {
  setElementProperties(methods, ["style", "borderColor"], "black");

  playerSelectedMethod = "";
  computerSelectedMethod = "";

  setElementProperties(["result", "computer-choice", "player-choice"], ["style", "visibility"], "hidden");
  setElementProperties(["retry-btn", "play-btn"], ["disabled"], true);
};
