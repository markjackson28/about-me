'use strict';

// console.log('Hello World')

// Welcome Prompt
let username = prompt('What is your name?');
alert('Welcome ' + username + '! My name is Mark. Nice me meet you! Please answer the following five questions with yes/no or y/n. Please and Thank You!');


// First Question
let answerOne = prompt('Do I live in Seattle?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('You are correct! I live in Seattle');
  console.log('answerOne: ' + answerOne)
  alert('You are correct! I do live in Seattle!');
}

// Second Question
let answerTwo = prompt('Was I ever a waiter?').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n') {
  // console.log('You are correct! I was not a waiter, I was a bartender.');
  console.log('answerTwo: ' + answerTwo)
  alert('You are correct! I was not a waiter, I was a bartender.');
}

// Third Question
let answerThree = prompt('Is it one of my goals to compete in the CrossFit games?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  // console.log('You are correct! I hope to compete in the CrossFit Games.');
  console.log('answerThree: ' + answerThree)
  alert('You are correct! I hope to compete in the CrossFit Games.');
}

// Fourth Question
let answerFour = prompt('Did I live in Canada before Seattle?').toLowerCase();

if (answerFour === 'no' || answerFour === 'n') {
  // console.log('You are correct! I lived in Tacoma before Seattle.');
  console.log('answerFour: ' + answerFour)
  alert('You are correct! I lived in Tacoma before Seattle.');
}

// Fifth Question
let answerFive = prompt('Did I ever serve in the military?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  // console.log('You are correct! I did serve in the military!');
  console.log('answerFive: ' + answerFive)
  alert('You are correct! I did serve in the military!');
}

alert('Thanks for playing ' + username + '!');
