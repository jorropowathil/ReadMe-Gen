// constants
const inquirer = require('inquirer');
const fs = require('fs');

// Make ReadMe Function
function makeAReadMe(info) {
  var answers= 
  `
   # ${info.title}
   ## Table of Contents
   [Install](#Installation-Notes)  
   [Usage](#Usage-Notes)  
   [License](#License-Notes)  
   [Contributions](#Contributing-Notes)  
   [Tests](#Test-Notes)
   [Questions](#Questions?)
   ## Installation Notes
   \`\`\` ${info.installationNotes} \`\`\`
   ## Usage Notes
   ${info.usageNotes}
   ## License Notes
   ${info.licenseNotes}
   ## Contributing Notes
   ${info.contributingNotes}
   ## Test Notes
   ${info.testNotes}
   ## Questions?
   Github: https://github.com/${info.githhub} \n
   E-mail: ${info.email} \n
  `
  return answers
}

// Inquirer Prompt
inquirer.prompt ([
  // List of Questions
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
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
      type: 'list',
      message: 'What do you want to include in the license notes?',
      name: 'licenseNotes',
      choices: [
        "Apache License 2.0", 
        "GNU General Public License v3.0",
        "MIT License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Mozilla Public License 2.0",
        "The Unlicense",
    ],
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
      message: 'What is your github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  // .then function
  .then((answers) => {
    var finalReadMe = makeAReadMe(answers);
    console.log(finalReadMe)
    fs.writeFile('ReadMe.md', finalReadMe, (err) =>
    // error handling
        err ? console.log(err) : console.log('Success!')
    );
});




// TODO: Create a function to write README file

// function writeToFile(ReadMe.md, answers) {
 
// }

// TODO: Create a function to initialize app

function init() {}

// Function call to initialize app

init();
