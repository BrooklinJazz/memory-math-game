const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let initialNumber = 200;


const range = (min, max) => Math.ceil(Math.random() * (max - min) + min)


const randomOperator = () => Math.random() >= 0.5 ? "+" : "-"

const ask = (previousNumber) => {

  const numberToAdd = range(0, 10);
  readline.question(`What is ${previousNumber} + ${numberToAdd}?`, (answer) => {
    if (answer == previousNumber + numberToAdd) {
      console.log("Correct!");
    } else {
      console.log("Try again");
    }
    ask(previousNumber + numberToAdd);
    readline.close();
  });
};

ask(initialNumber);
