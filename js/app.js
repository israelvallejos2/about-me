'use strict';

let totalCorrect = 0;

let userName = prompt('Please enter your first name.');

alert(userName + ', you will now be asking you some questions now.');

function Military() {
    let Military = prompt('Did I join the military right out of highschool? Yes or No?').toLowerCase();
    if (Military === 'yes' || Military === 'y') {
        // console.log('your answered correctly!');
        alert('your answered correctly!');
        totalCorrect = totalCorrect + 1;
    }
    else {
        // console.log('sorry, that\'s incorrect.');
        alert('sorry, that\'s incorrect.');
    }
}



Military();
function Kids() {
    let Kids = prompt('Do I have 2 kids? Yes or No?').toLowerCase();

    if (Kids === 'yes' || Kids === 'y') {
        // console.log('your answered correctly!');
        alert('your answered correctly!');
        totalCorrect = totalCorrect + 1;
    }
    else {
        // console.log('sorry, that\'s incorrect.');
        alert('sorry, that\'s incorrect.');
    }
}
Kids();
function Location(){
    let Location = prompt('Did I live in Upstate Ny? Yes or No?').toLowerCase();

    if (Location === 'yes' || Location === 'y') {
        // console.log('your answered correctly!');
        alert('your answered correctly!');
        totalCorrect = totalCorrect + 1;
    }
    else {
        // console.log('sorry, that\'s incorrect.');
        alert('sorry, that\'s incorrect.');
    }
}
Location();

let Job = prompt('Did I lose my Job due to Covid 19? Yes or No?').toLowerCase();

if (Job === 'yes' || Job === 'y') {
    // console.log('your answered correctly!');
    alert('your answered correctly!');
    totalCorrect = totalCorrect + 1;
}
else {
    // console.log('sorry, that\'s incorrect.');
    alert('sorry, that\'s incorrect.');
}


let numberGuessed = 0;
let numberOfGuesses = 6;
let correctAnswer = Math.floor(Math.random() * 101);
alert('Let\'s play a guessing game.  You will get four (6) chances to guess a random generated number between 0 and 100.');


numberGuessed = prompt('Please enter your guess for the random generated number.');

while (parseInt(numberGuessed) !== correctAnswer && (numberOfGuesses - 1) > 0) {
    numberOfGuesses--;
    if (parseInt(numberGuessed) < correctAnswer) {
        numberGuessed = prompt('You have incorrectly guessed the number.  The actual number is higher.  Please guess again.');
    }
    else if (parseInt(numberGuessed) > correctAnswer) {
        numberGuessed = prompt('You have incorrectly guessed the number.  The actual number is lower.  Please guess again.');
    }
    else {
        numberGuessed = prompt('You have not entered a valid number.  Please guess again.');
    }
}



if (parseInt(numberGuessed) === correctAnswer) {
    alert('You have guessed the computer generated number!');
    totalCorrect = totalCorrect + 1;
}
else {
    alert('The computer generated number was ' + correctAnswer);
}

const PlacesOfTravel = ['iraq', 'cameroon', 'niger', 'ireland', 'spain', 'germany', 'albenia', 'fort drum', 'georgia', 'mexico'];
let PlacesGuessed = '';
let guessesRemaining = 10;
let answeredCorrectly = 'No';
let allAnswers = '';


for (let i = 0; i < PlacesOfTravel.length - 1; i++) {
    allAnswers += PlacesOfTravel[i] + ",  ";
}


allAnswers += PlacesOfTravel[PlacesOfTravel.length - 1];


alert('Let\'s play a new game.  Try to guess one of my Top 10 places I have been.  You have up to 10 (10) guesses.');


PlacesGuessed = prompt('Please enter Location that you think are in his top 10.');

for (let k = (guessesRemaining - 1); k > 0; k--) {
    for (let i = 0; i < PlacesOfTravel.length; i++) {
        if (PlacesGuessed.toLowerCase() === PlacesOfTravel[i]) {
            alert('You have guessed one of Israel top 10 correctly!');
            answeredCorrectly = 'yes';
            totalCorrect = totalCorrect + 1;
            break;
        }
        else {
            console.log(PlacesGuessed);
        }
    }
    if (answeredCorrectly === 'Yes') {
        break;
    }
    PlacesGuessed = prompt('You have not guessed one of Israel top 10 correctly.  Please try again.');
}


    alert("The possible answers were: " + allAnswers);

    alert("You have scored " + totalCorrect + " out of a possible 6.");
