const options = ['rock', 'paper', 'scissors'];

export function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

export function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        return 'draw';
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
             playerChoice === 'paper' && computerChoice === 'rock' ||
             playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';
    }
    else {
        return 'lose';
    }
}

