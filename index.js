// constants
const inquirer = require('inquirer');
const fs = require('fs');

function makeAReadMe(info) {
  var answers= 
  `
  
   # ${info.title}
   ## ${info.tableOfContents}
   ## Installation notes
   ${info.installationNotes}
   ## Usage Notes
   ${info.usageNotes}
   ## License Notes
   ${info.licenseNotes}
   ## Contributing Notes
   ${info.contributingNotes}
   ## Test Notes
   ${info.testNotes}
   ## Question Notes
   ${info.questionNotes}
  `
  return answers
}

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
    var finalReadMe = makeAReadMe(answers);
    console.log(finalReadMe)
    fs.writeFile('ReadMe.md', finalReadMe, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});



// TODO: Create a function to write README file

// function writeToFile(ReadMe.md, answers) {
//  
// }

// TODO: Create a function to initialize app

// function init() {}

// Function call to initialize app

// init();

// TODO: Include packages needed for this application
// require generateMarkdown
// require inquirer
// TODO: Create an array of questions for user input