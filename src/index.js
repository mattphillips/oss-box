const { green, red } = require('chalk');
const fs = require('fs-extra');
const inquirer = require('inquirer');

const generate = require('./generate');
const fsTask = require('./fsTask');
const { compose, join, promiseToTask } = require('./utils');

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

const fileSystem = fsTask(fs);

const error = compose(console.error, red); // eslint-disable-line
const success = compose(console.log, green, join('\n')); // eslint-disable-line

promiseToTask(() => inquirer.prompt(questions))
  .chain(config => fileSystem.exists(`./${config.name}`, config))
  .chain(config => compose(generate(fileSystem)(`./${config.name}`), buildTemplates)(config))
  .fork(error, success);
