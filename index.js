// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions 
const questions = [
  { 
    type: "input",
    name: "title",
    message: "What is your projects title?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a short paragraph describing your project."
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions for use?"
  },
  {
    type: "list",
    name: "license",
    message: "Select the open source license desired from the list below.",
    choices: ['MIT', 'GNU GPL', 'Apache License 2.0', 'ISC', 'None']
  },
  {
    type: "input",
    name: "contributing",
    message: "List your collaborators, if any."
  },
  {
      type: "input",
      name: "tests",
      message: "Write tests for your application here."
  },
  {
      type: "input",
      name: "github",
      message: "What is your Github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
]

// TODO: Create a function to write README file
// Function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err)
    } else { 
      console.log("Successfully wrote README.md")
    }
  });
}


// TODO: Create a function to initialize app
// Function to initialize app
const init = () => {
  inquirer.prompt(questions)
  .then(function (data) {
    writeFile("README.md", generateMarkdown(data));
    console.log(data)
  });
}

// Function call to initialize app
init();