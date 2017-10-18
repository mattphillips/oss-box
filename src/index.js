const inquirer = require('inquirer');

const generate = require('./generate');
const { compose, promiseToTask } = require('./utils');

const buildTemplates = require('./templates');

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

promiseToTask(() => inquirer.prompt(questions))
  .chain(config => compose(generate(`./${config.name}`), buildTemplates)(config))
  .fork(console.error, msgs => console.log(msgs.join('\n'))); // eslint-disable-line
