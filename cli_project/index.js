var inquirer = require('inquirer');

var choices = ['a','b','c']
console.log(choices)
choices.push('Multiline option \n  super cool feature');
choices.push({
  name:
    'sdafdsfdsfaasdfsda',
  value: 'foo',
  short: 'The long option'
});

inquirer
  .prompt([
    {
      type: 'list',
      name: 'letter',
      message: "What's your favorite letter?",
      choices: choices
    },
    {
      type: 'checkbox',
      name: 'name',
      message: 'Select the letter contained in your name:',
      choices: choices
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });