const path = require('path');

const allContributors = require('./all-contributors');
const license = require('./license');
const package = require('./package');
const readme = require('./readme');

module.exports = config => [
  {
    contents: allContributors(config),
    file: 'all-contributors.json',
    message: 'Created: all-contributors.json',
    type: 'output'
  },
  {
    contents: package(config),
    file: 'package.json',
    message: 'Created: package.json',
    type: 'output'
  },
  {
    contents: license(config),
    file: 'LICENSE',
    message: 'Created: LICENSE',
    type: 'output'
  },
  {
    contents: readme(config),
    file: 'README.md',
    message: 'Created: README.md',
    type: 'output'
  },
  {
    from: path.join(__dirname, './static'),
    to: '',
    message:
      'Created: .gitignore' +
      '\nCreated: .travis' +
      '\nCreated: CONTRIBUTING.md' +
      '\nCreated: EXAMPLES.md' +
      '\nCreated: ROADMAP.md' +
      '\nCreated: ISSUE_TEMPLATE.md' +
      '\nCreated: PULL_REQUEST_TEMPLATE.md',
    type: 'copy'
  }
];
