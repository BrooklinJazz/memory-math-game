const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const range = (min, max) => Math.ceil(Math.random() * (max - min) + min);

let initialNumber = range(0, 10);

const ask = (previousNumber, numberToAdd = range(0, 10)) => {
  const correctAnswer = previousNumber + numberToAdd;

  readline.question(
    `What is ${previousNumber} + ${numberToAdd}?`,
    (userAnswer) => {
      if (userAnswer == correctAnswer) {
        console.log("Correct!");
        ask(correctAnswer);
      } else {
        console.log("Try again");
        ask(previousNumber, numberToAdd);
      }
    }
  );
};

ask(initialNumber);

// 1 digit, 2 digit, and 3 digit modes. for both the initial number, and the second number.
//so you can add a 4 digit to 2 digits for example.
// don't use the previous answer, generate a random question each time?
// allow positive or negative
// Try again with same number feature
// the ability to measure speed as a measure of performance
// the ability to hide the previous number (to force you to remember it)
// modes like easy, medium, hard.
// different operators like * and /
// hide the question so you have to remember the numbers
// stop the game if you get one wrong (or lose lives?) so that the game ends and you get a score.
// average answer speed
// fastest answer
// total correct
// highest number

// create a game to master multiplication tables up to 10
