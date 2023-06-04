const btns = document.querySelector('.btns');
const mesg = document.querySelector('.row-1');
const heading = document.querySelector('.heading');
const score0 = document.querySelector('.score-0');
const score1 = document.querySelector('.score-1');
const btnPlayAgain = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');

let scores = [0, 0];

const getRandomChoice = function () {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const showModal = function () {
    setTimeout(function () {
        modal.classList.remove('hidden');
    }, 700);
};

const hideModal = function () {
    modal.classList.add('hidden');
};

btns.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const playerChoice = btn.getAttribute('data-choice');
    const computerChoice = getRandomChoice();

    if (playerChoice === computerChoice) {
        heading.textContent = `It's a tie!!`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        heading.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        scores[0]++;
        score0.textContent = scores[0];
    } else {
        heading.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        scores[1]++;
        score1.textContent = scores[1];
    }

    if (scores[0] === 5) {
        showModal();
    } else if (scores[1] === 5) {
        document.querySelector('.modal-text').textContent = `You Lose !💩`;
        showModal();
    }
});

btnPlayAgain.addEventListener('click', function (e) {
    scores = [0, 0];
    score0.textContent = 0;
    score1.textContent = 0;
    heading.textContent = 'Choose your pick';
    hideModal();
});
