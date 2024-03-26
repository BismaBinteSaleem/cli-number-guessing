#!/usr/bin/env node 
import inquirer from "inquirer";
//1) Computer will generate a number Done
//2) user input for guessing number Done
//3)Compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 10 + 1);
const guessNumber = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1 - 10 :",
    },
]);
if (guessNumber.userGuessNumber === randomNumber) {
    console.log("Congratulation you guess a true number");
}
else
    console.log("you guess wrong number");
