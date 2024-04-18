#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let myPin = 1221;
console.log(chalk.cyan("\n \tWellcome to Zain-Darbari - ATM-Machine\n "));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code: "
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully!");
    console.log(`Current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Withdraw Amount", "Check balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawalAns = await inquirer.prompt([
            {
                name: "withdrawlMethod",
                type: "list",
                Message: "Select a Withdrawl Method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawalAns.withdrawlMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount :",
                    choices: [1000, 2000, 5000, 10000, 20000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} Withdraw Successfully`);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
        else if (withdrawalAns.withdrawlMethod === "Enter Amount") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    message: "enter the amount to withdraw:",
                    type: "number",
                }
            ]);
            // = += -=
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`your balace is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code, Try again");
}
