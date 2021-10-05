'use strict';

// let answerCorrect = true;
// let alterateCorrect = true;
// && - the "logical and "
// || - the "logical or "
// !  - the "logical "

// if (answerCorrect || alterateCorrect) {
//     console.log('your answered correctly!');
// }
// else {
//     console.log('sorry, that\'s incorrect.');
// }

let userAnswer1 = prompt("Is the sky blue cause god loves the Infantry? Yes or No?").toUpperCase();
let userAnswer2 = prompt("Did I join the military right out of highschool? Yes or No?").toUpperCase();
let userAnswer3 = prompt("Did I join the military right out of highschool? Yes or No?").toUpperCase();
let userAnswer4 = prompt("Do I have 2 kids? Yes or No?").toLowerCase();
let userAnswer5 = prompt("Have you traveled around the world? Yes or No?").toLowerCase();
// let userAnswer6 = prompt("Is your favorite color blue? Yes or No?").toLowerCase();

if (userAnswer1 === 'YES'|| 'Y') {
    // console.log('your answered correctly!');
    alert('your answered correctly!');
}
else {
    // console.log('sorry, that\'s incorrect.');
    alert('sorry, that\'s incorrect.');
}



if (userAnswer2 === 'Yes' || userAnswer2 === 'y') {
    // console.log('your answered correctly!');
    alert('your answered correctly!');
}
else {
    // console.log('sorry, that\'s incorrect.');
    alert('sorry, that\'s incorrect.');
}

if (userAnswer3 === 'Yes' || userAnswer3 === 'y') {
    // console.log('your answered correctly!');
    alert('your answered correctly!');
}
else {
    // console.log('sorry, that\'s incorrect.');
    alert('sorry, that\'s incorrect.');
}

if (userAnswer4 === 'Yes' || userAnswer4 === 'y') {
    // console.log('your answered correctly!');
    alert('your answered correctly!');
}
else {
    // console.log('sorry, that\'s incorrect.');
    alert('sorry, that\'s incorrect.');
}
if (userAnswer5 === 'Yes' || userAnswer5 === 'y') {
    // console.log('your answered correctly!');
    alert('your answered correctly!');
}
else {
    // console.log('sorry, that\'s incorrect.');
    alert('sorry, that\'s incorrect.');
}

let attempsRemaining = 6;
// variable array of answers
let favColor = ['blue', 'cream', 'rose'];


//variable to store the user input

while(attempsRemaining) {
    console.log("I'm inside the while loop");
    // console.log(attempsReaminin);
    // alerts the user if they were right 
    // alers the user how many attemps they have left
    console.log(`you have ${attempsRemaining -1} attempts remaining`);
    attempsRemaining--;
}

//user is prompted for a guress

// the user input is evaulated

// is that value in my array of ansers?

// does the user have any more attempts to guess



// let attempsRemaining = 6 

// let favColor = ['blue', 'red', 'green'];

// let userResponse = 'blue';

// for (let i = 0; i < favColor.length; i++) {
//     if(userResponse === favColor[i]) {
//         console.log("that's correct");
//     }
// }


// let attempts = 6;

// for (let i = 0; i < attempts; i++);{
//     console.log(i); 

// }