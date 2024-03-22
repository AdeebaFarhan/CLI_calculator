#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter your Second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operators",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
            "Square",
            "Cube",
        ],
    },
]);
console.log(answer);
// Conditional statements
if (answer.operators === "Addition") {
    console.log("Your value is", answer["firstNumber"] + answer["secondNumber"]);
}
else if (answer.operators === "Subtraction") {
    console.log("Your value is", answer["firstNumber"] - answer["secondNumber"]);
}
else if (answer.operators === "Multiplication") {
    console.log("Your value is", answer["firstNumber"] * answer["secondNumber"]);
}
else if (answer.operators === "Division") {
    console.log("Your value is", answer["firstNumber"] / answer["secondNumber"]);
}
else if (answer.operators === "Modulus") {
    console.log("Your value is", answer["firstNumber"] % answer["secondNumber"]);
}
else if (answer.operators === "Square") {
    console.log("Your value is", answer["firstNumber"] ** 2);
}
else if (answer.operators === "Cube") {
    console.log("Your value is", answer["firstNumber"] ** 3);
}
