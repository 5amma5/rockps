const choices = ["Rock", "Paper", "Scissors"]
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() { return choices[Math.floor(Math.random() * choices.length)] }

function getPlayerChoice() {
  let choice = prompt('Type Rock, Paper, or Scissors');
  let adjChoice = adjPlayerChoice(choice);
  while(!choices.includes(adjChoice)) {
    choice = prompt(`${choice} is not a valid option. Please enter Rock, Paper, or Scissors`);
    adjChoice = adjPlayerChoice(choice);
  }
  return adjChoice;
}

function adjPlayerChoice(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === choices[0] && computerSelection === choices[2] || 
      playerSelection === choices[1] && computerSelection === choices[0] ||
      playerSelection === choices[2] && computerSelection === choices[1]) {
    
    playerWins += 1
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  
  } else if (playerSelection === computerSelection) {
    
    console.log(`It's a tie! You both chose ${computerSelection}`);
  
  } else {
    
    computerWins += 1
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  
  }
}

function playGame() {
  const rounds = 5
  for (let i = 0; i < rounds; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
    console.log(`After ${i + 1} rounds, the score is You: ${playerWins} | Computer: ${computerWins}`)
  }
  announceWinner();
  resetGame();
}

function announceWinner() {
  if (playerWins > computerWins) {
    console.log(`You won! You had ${playerWins} wins and the computer had ${computerWins}`);
  } else if (playerWins < computerWins) {
    console.log(`You lost! The computer had ${computerWins} wins and you had  ${playerWins}`)
  } else {
    console.log(`It's a tie! You both had ${playerWins} wins each out of 5 rounds`)
  }
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
}