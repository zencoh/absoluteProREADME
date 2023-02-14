// TODO: Include packages needed for this application
// To connect the generateMarkdown.js can I make it requrire the file?
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description about your project'
    },
    {
        type: 'input',
        name: 'instal',
        message: 'Give installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give usage information'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Give contribution guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Give testing instuctions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email?'
    }
];
inquirer.prompt(questions).then(answers => {
    const { title, description, instal, usage, contributing, test, license, username, email } = answers;
    writeToFile("README.md", generateMarkdown(answers));
});

// TODO: Create a function to write README file
// is the fileName supposed to be README.md, and the data is title, description, instal, usage, contributing, test, license, username, email?
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) return console.log(err);
        console.log(`${fileName} Generated`);
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
