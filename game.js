const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');
const results = document.querySelector('#results');
const score = document.querySelector('#score');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    playRound(e.target.id, getComputerChoice());
  });
});


function getComputerChoice() { return choices[Math.floor(Math.random() * choices.length)] }


function playRound(playerSelection, computerSelection) {
  if (playerSelection === choices[0] && computerSelection === choices[2] || 
    playerSelection === choices[1] && computerSelection === choices[0] ||
    playerSelection === choices[2] && computerSelection === choices[1]) {
      
      playerScore += 1
      displayScore();
    } else if (playerSelection === computerSelection) {
      
      results.textContent = `It's a tie! You both chose ${computerSelection}`;
      displayScore();
    } else {
      
      computerScore += 1
      results.textContent = `You Lose! Your selection of ${playerSelection} loses to the computer's selection of ${computerSelection}`;
      displayScore();
    }
    
    if (playerScore == 5 || computerScore == 5) {
      announceWinner();
      resetGame();
    }
  }
  
  function displayScore() {
    score.innerText = "Score:\nYou: " + playerScore + "\nComputer: " + computerScore;
  }
  
  function announceWinner() {
    if (playerScore > computerScore) {
      results.textContent = `You WON the game!`;
    } else if (playerScore < computerScore) {
      results.textContent = `You LOST the game!`;
    } else {
      results.textContent = `Hmmm, something is wrong. This should have displayed who won or lost the game :/`;
    }
    results.innerText += "\nStart a new game by clicking any of the options above";
  }
  
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
  }
  
  // function getPlayerChoice() {
  //   let choice = prompt('Type Rock, Paper, or Scissors');
  //   let adjChoice = adjPlayerChoice(choice);
  //   while(!choices.includes(adjChoice)) {
  //     choice = prompt(`${choice} is not a valid option. Please enter Rock, Paper, or Scissors`);
  //     adjChoice = adjPlayerChoice(choice);
  //   }
  //   return adjChoice;
  // }
  
  // function adjPlayerChoice(choice) {
  //   return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  // }
  
  // function playGame() {
    //   let playerScore = 0;
    //   let computerScore = 0;
    //   const score = document.createElement('div');
    
    //   for (let i = 0; i < rounds; i++) {
      //     playRound(getPlayerChoice(), getComputerChoice());
//     console.log(`After ${i + 1} rounds, the score is You: ${playerScore} | Computer: ${computerScore}`)
//   }
//   announceWinner();
//   resetGame();
// }