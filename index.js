
// node variables
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const userQuestion = () =>
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
)


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File written successfully!');
      }
    });
  } 
  
  // function to initialize program
  function init() {
    // called userQuestion to prompt the user for input and when resolves pass it to writeToFile
    userQuestion().then(data => writeToFile("README.md",data));
    
  }
  
  // function call to initialize program
  init();
  












