// TODO: Include packages needed for this application
// require generateMarkdown
// require inquirer
// TODO: Create an array of questions for user input
const questions = [[
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'language',
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'confirm',
      choices: [
          "cell", 
          "home",
          "work"
      ]
    },
  ]];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
