let cardDealtPlayer
let cardDealtDealer
let min
let max
let newValue
let playerScore
let dealerScore

function initialDeal(min, max) {
    min = 4;
    max = 21;

    let difference = max - min;

    // random between 0 and the difference
    let random = Math.round(difference * Math.random());

    cardDealtPlayer = random + min;

    return cardDealtPlayer;
}

function dealCardPlayer(min, max) {
    min = 2;
    max = 11;

    let differenceUser = max - min;

    // random between 0 and the difference
    let randomUser = Math.round(differenceUser * Math.random());

    cardDealtPlayerNew = randomUser + min;

    console.log(`Card dealt: ${cardDealtPlayerNew}`);

    return cardDealtPlayerNew;
}

function dealCardDealer(min, max) {
    min = 2;
    max = 11;

    let differenceComp = max - min;

    // random between 0 and the difference
    let randomComp = Math.round(differenceComp * Math.random());

    cardDealtDealer = randomComp + min;

    console.log(`Dealer has been dealt ${cardDealtDealer}`);

    return cardDealtDealer;
}

function hit() {

    dealCardPlayer();

    playerScore += cardDealtPlayerNew;
    console.log(`You were dealt ${cardDealtPlayerNew}. Your score is now ${playerScore}`);
    alert(`You were dealt: ${cardDealtPlayerNew} and your score is now ${playerScore}`);

    if (playerScore > 21) {
        alert(`You are now on ${playerScore}. You have gone BUST! You lose.`)
        return null;
    } else if (playerScore === 21) {
        alert(`You are on ${playerScore}. You win!`);
    } else {
        hitOrStay();
    }

    return newValue;
}

function compareScores() {

    const winningScore = 21;

    let scores = [playerScore, dealerScore].reduce((a, b) => {
        return Math.abs(b - winningScore) < Math.abs(a - winningScore) ? b : a;
    });

    if (scores == dealerScore) {
        console.log(`Dealer is on ${dealerScore}, which is closer to 21 than your score. They win!`);
        alert(`Dealer is on ${dealerScore}, which is closer to 21 than your score. They win!`)
    } else if (scores == playerScore) {
        console.log(`You are on ${playerScore} which is closer to 21 than the dealer's score. You win`);
        alert(`You are on ${playerScore} which is closer to 21 than the dealer's score. You win`);
    }
}

function dealDealer() {
    dealCardDealer();
    dealerScore += cardDealtDealer;
    console.log(`Dealer was dealt ${cardDealtDealer} and their score is now ${dealerScore}`);
    
    if (dealerScore < 17) {
        dealDealer();
    } else if (dealerScore >= 17 && dealerScore <= 21) {
        compareScores();
    } else if (dealerScore > 21) {
        alert(`Dealer is on ${dealerScore}. They lose. You win!`)
    }
}

function hitOrStay() {
    var hitMe = confirm(`You have ${playerScore}. Would you like to hit or stay?`);

    if (hitMe) {
        hit();
    } else {
        dealDealer();
    }
}

//This function runs when start button is clicked. 
function startGame() {
    alert("Welcome to my Blackjack Game! Click OK to start");

    initialDeal();

    if (cardDealtPlayer === 21) {
        alert('You have been dealt 21. You have won!!!');
        return null;
    } else if (cardDealtPlayer < 21) {
        alert(`You have been dealt ${cardDealtPlayer}`);
        console.log(`You have been dealt: ${cardDealtPlayer}`);
    }

    playerScore = cardDealtPlayer;

    dealCardDealer();
    
    dealerScore = cardDealtDealer;

    alert(`Dealer has been dealt ${dealerScore}`);

    hitOrStay();

}

//Starting function on start button click, calls startGame function
function init() {
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', startGame);
}

init();