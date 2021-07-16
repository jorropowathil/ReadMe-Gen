// constants
const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt ([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What do you want to include in the Table of contents?',
      name: 'tableOfContents',
    },
    {
      type: 'input',
      message: 'What do you want to include in the installation notes?',
      name: 'installationNotes',
    },
    {
      type: 'input',
      message: 'What do you want to include in the usage notes?',
      name: 'usageNotes',
    },
    {
      type: 'input',
      message: 'What do you want to include in the license notes?',
      name: 'licenseNotes',
    },
    {
      type: 'input',
      message: 'What do you want to include in the contributing notes?',
      name: 'contributingNotes',
    },
    {
      type: 'input',
      message: 'What do you want to include in the test notes?',
      name: 'testNotes',
    },
    {
      type: 'input',
      message: 'What do you want to include in the question notes?',
      name: 'questionNotes',
    },
  ])
  .then((answers) => {
    console.log(answers);
    var finalHtml = makeAReadMe(answers)
    fs.writeFile('ReadMe.md', finalHtml, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});


// TODO: Create a function to write README file
function writeToFile(README.md, answers) {
  var answers= `
  ###${info.title}
  ###${info.tableOfContents}
  ###${info.installationNotes}
  ###${info.usageNotes}
  ###${info.licenseNotes}
  ###${info.contributingNotes}
  ###${info.testNotes}
  ###${info.questionNotes}
  `
  return answers

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
// require generateMarkdown
// require inquirer
// TODO: Create an array of questions for user input