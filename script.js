function playGame() {
    const choices = ['rock', 'paper', 'scissors'];
    const playerChoice = prompt('Enter your choice: rock, paper, or scissors');
    const computerChoice = getRandomChoice();

    console.log('Player choice:', playerChoice);
    console.log('Computer choice:', computerChoice);

    if (!choices.includes(playerChoice)) {
        console.log('Invalid choice. Please choose rock, paper, or scissors.');
        return;
    }

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!');
    }
}

function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

playGame();
