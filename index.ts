#!/usr/env code

import inquirer from "inquirer";

console.log("\n\tWelcome to Shah Bano Pirzada - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 9 + 1);

const answer = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: "Enter your guessed number (Number Limit 1 to 9):",
},
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed a correct number.");
}
else{
    console.log("Sorry! You guessed a incorrect number");
}