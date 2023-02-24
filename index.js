
// node variables
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
// const generateMarkdown = require("./utils/generateMarkdown");

// import inquirer from "inquirer";
// import fs from "fs/promise";


// array of questions for user
inquirer.prompt(

    [
        {
            type: "input",
            name: "title",
            message: "what is the title of the project?",
        },
        {
            type: "input",
            name: "description",
            message: "please describe your project.",
        },
        {
            type: "input",
            name: "Installation",
            message: "how do you install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "how is your project used?",
        },
        {
            type: "checkbox",
            name: "license",
            message: "which of these license is applicable to your repo?",
            choices: ["APACHE", "TOMCAST", "MIDDLEWARE","MIT","NONE"]
        },
        {
            type: "input",
            name: "contributor",
            message: "please list contributors?",
        },
        {
            type: "input",
            name: "test",
            message: "require test? please provide walk through",
        }
    ]
).then(data => console.log(data));



// // function to write README file
function writeToFile(fileName, data) {

}

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


