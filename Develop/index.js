// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require(`../lib/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Welcome to the Readme Generator! Enter your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instruction?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your GitHub repo?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT']
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(README, data) {
    fs.writeFile(`README.md`, generateMarkdown(data), function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Success!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(response.title, response);
        })
        .catch((error) => {
            console.log(error);
        })
}

// // Function call to initialize app
init();




