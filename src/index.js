const inquirer = require('inquirer');

const generator = require('./generator');

const nonEmpty = input => input !== '';

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Project name?',
    validate: nonEmpty
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project description?',
    validate: nonEmpty
  },
  {
    type: 'input',
    name: 'author',
    suffix: ' Format: name <email> (website)',
    message: 'Project author?',
    validate: nonEmpty
  },
  {
    type: 'input',
    name: 'owner',
    message: 'Github username?',
    validate: nonEmpty
  }
];

inquirer.prompt(questions).then(generator);
