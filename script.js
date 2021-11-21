let playerScore = 0
let computerScore = 0

function reset() {
  playerScore.reload
  computerScore.reload
  winningMessage.reload
}

const displayResult = document.querySelector('#result')
const displayChoices = document.querySelector('#choices')
const choices = ['rock', 'paper', 'scissors']
const totalScore = document.querySelector('#score')

const handleClick = (e) => {
  playRound(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}
choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click', handleClick) 
  displayChoices.appendChild(button)
})

totalScore.innerHTML = 'Your score ' + playerScore + '<br/> The computer ' + computerScore; 

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection + computerSelection) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      displayResult.innerHTML = 'You chose ' + playerSelection + ' and the computer chose ' + computerSelection + ', You WON!'
      playerScore++
      totalScore.innerHTML = 'Your score ' + playerScore + '<br/> The computer ' + computerScore;  
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      displayResult.innerHTML = 'You chose ' + playerSelection + ' and the computer chose ' + computerSelection + ', You LOST.'
      computerScore++
      totalScore.innerHTML = 'Your score ' + playerScore + '<br/> The computer ' + computerScore;  
      break
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
      displayResult.innerHTML = 'You chose ' + playerSelection + ' and the computer chose ' + computerSelection + ', You TIED.'
      totalScore.innerHTML = 'Your score ' + playerScore + '<br/> The computer ' + computerScore;  
      break
  }
  if (playerScore >= 5) {
    alert('Congratulations! You beat the computer!');
    document.location.reload(); // reset the game after you win
  } 
  else if (computerScore >= 5) { 
    alert('Dang! The computer beat you. Try again');
    document.location.reload(); // reset the game after you lose
  } 
}
