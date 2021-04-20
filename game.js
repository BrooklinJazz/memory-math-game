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

// 1 digit, 2 digit, and 3 digit modes
// allow positive or negative
// Try again with same number feature
// the ability to measure speed
// modes like easy, medium, hard.
// different operators like * and /
