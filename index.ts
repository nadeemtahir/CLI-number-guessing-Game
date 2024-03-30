#! usr/bin/env node

import inquirer from "inquirer";


let randomNumbers = Math.floor(Math.random() *5 + 1);
const answers =await inquirer.prompt([
    {
        name :"userGuessNumber",
        type:"number",
        message:"Please guess any number between 1 - 5:",
    },
]);

if(answers.userGuessNumber===randomNumbers){
    console.log("HURRAY! you guess correct number.");
} else{
    console.log("UPSSSS! you guess wrong number. Please try again....THANK YOU.");
}