'use strict';

let totalScore = 0;

let username = prompt('What is your name?');
alert('Welcome ' + username + '! My name is Mark. Nice to me meet you! Please answer the following five questions with yes/no or y/n. Please and Thank You!');

function q1() {
  let answerOne = prompt('Do I live in Seattle?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    alert('You are correct! I do live in Seattle!');
    totalScore++;
  }
}
q1();

function q2() {
  let answerTwo = prompt('Was I ever a waiter?').toLowerCase();

  if (answerTwo === 'no' || answerTwo === 'n') {
    alert('You are correct! I was not a waiter, I was a bartender.');
    totalScore++;
  }
}
q2();

function q3() {
  let answerThree = prompt('Is it one of my goals to compete in the CrossFit games?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    alert('You are correct! I hope to compete in the CrossFit Games.');
    totalScore++;
  }
}
q3();

function q4 () {
  let answerFour = prompt('Did I live in Canada before Seattle?').toLowerCase();

  if (answerFour === 'no' || answerFour === 'n') {
    alert('You are correct! I lived in Tacoma before Seattle.');
    totalScore++;
  }
}
q4();

function q5 () {
  let answerFive = prompt('Did I ever serve in the military?').toLowerCase();

  if (answerFive === 'yes' || answerFive === 'y') {
    alert('You are correct! I did serve in the military!');
    totalScore++;
  }
}
q5();

function q6 () {
  alert('I have a picked a number between 1-15. You will have 4 chances to guess the correct number. Have fun!');

  for (let i = 4; i > 0; i--){
    let answerSix = parseInt(prompt('Please pick a number 1-15.'));
    if (answerSix === 7){
      alert('You are correct! Great Job!');
      totalScore++;
      break;
    }
    else if (answerSix > 7) {
      alert('Sorry, too high. Please try again.');
    } else if (answerSix < 7) {
      alert('Sorry, too low. Please try again');
    } if (i === 1){
      alert('Sorry, you did not guess the correct number. My was 7. Good try!');
      break;
    }
  }
}
q6();

function q7(){
  let answeredCorrectly = false;
  let attempts = 6;

  alert('For this question, you will have 6 attempts.');
  while (!answeredCorrectly && attempts){
    let favColors = ['red', 'white', 'blue'];
    let answerSeven = prompt('What is one of my top 3 colors?').toLowerCase();

    for (let i = 0; i < favColors.length; i++){
      if (answerSeven === favColors[i]) {
        alert('You are correct! Great Job!');
        answeredCorrectly = true;
        totalScore++;
      }
    }
    if (attempts === 1){
      alert('Sorry you did not answer Correctly. My answers were red, white, and blue. Good try though!');
    }
    attempts--;
  }

  alert('You scored ' + totalScore + ' out of 7 questions. Thanks for playing ' + username + '!')
}
q7();
