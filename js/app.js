'use strict';

// console.log('Hello World')

let totalScore = 0;

// Welcome Prompt

let username = prompt('What is your name?');
alert('Welcome ' + username + '! My name is Mark. Nice to me meet you! Please answer the following five questions with yes/no or y/n. Please and Thank You!');

// First Question
function q1() {
  let answerOne = prompt('Do I live in Seattle?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('You are correct! I live in Seattle');
    alert('You are correct! I do live in Seattle!');
    totalScore++;
  }
}
q1();
// Second Question
function q2() {
  let answerTwo = prompt('Was I ever a waiter?').toLowerCase();

  if (answerTwo === 'no' || answerTwo === 'n') {
  // console.log('You are correct! I was not a waiter, I was a bartender.');
    alert('You are correct! I was not a waiter, I was a bartender.');
    totalScore++;
  }
}
q2();
// Third Question
function q3() {
  let answerThree = prompt('Is it one of my goals to compete in the CrossFit games?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
  // console.log('You are correct! I hope to compete in the CrossFit Games.');
    alert('You are correct! I hope to compete in the CrossFit Games.');
    totalScore++;
  }
}
q3();

// Fourth Question

let answerFour = prompt('Did I live in Canada before Seattle?').toLowerCase();

if (answerFour === 'no' || answerFour === 'n') {
  // console.log('You are correct! I lived in Tacoma before Seattle.');
  // console.log('answerFour: ' + answerFour)
  alert('You are correct! I lived in Tacoma before Seattle.');
  totalScore++;
}

// Fifth Question

let answerFive = prompt('Did I ever serve in the military?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  // console.log('You are correct! I did serve in the military!');
  alert('You are correct! I did serve in the military!');
  totalScore++;
}

// Sixth Question

alert('I have a picked a number between 1-15. You will have 4 chances to guess the correct number. Have fun!');

for (let i = 4; i > 0; i--){
  let answerSix = parseInt(prompt('Please pick a number 1-15.'));
  // console.log(I have a picked a number between 1-15. You will have 4 chances to guess the correct number. Have fun!');
  if (answerSix === 7){
    // console.log('You are correct!');
    alert('You are correct! Great Job!');
    totalScore++;
    break;
  }
  else if (answerSix > 7) {
    // console.log('Sorry, too high. Please try again.');
    alert('Sorry, too high. Please try again.');
  } else if (answerSix < 7) {
    // console.log('Sorry, too low. Please try again');
    alert('Sorry, too low. Please try again');
  } if (i === 1){
    // console.log('Sorry, you did not guess the correct number. Good Try!');
    alert('Sorry, you did not guess the correct number. My was 7. Good try!');
    break;
  }
}

// Seventh Question

let answeredCorrectly = false;
let attempts = 6;

alert('For this question, you will have 6 attempts.');
while (!answeredCorrectly && attempts){
  let favColors = ['red', 'white', 'blue'];
  let answerSeven = prompt('What is one of my top 3 colors?').toLowerCase();

  for (let i = 0; i < favColors.length; i++){
    if (answerSeven === favColors[i]) {
      // console.log('You are correct!');
      alert('You are correct! Great Job!');
      answeredCorrectly = true;
      totalScore++;
    }
  }
  if (attempts === 1){
    //console.log('Sorry you did not answer Correctly. My answers were red, white, and blue. Good try though!')
    alert('Sorry you did not answer Correctly. My answers were red, white, and blue. Good try though!');
  }
  attempts--;
}

alert('You scored ' + totalScore + ' out of 7 questions. Thanks for playing ' + username + '!');
// console.log('Score ' + totalScore)
