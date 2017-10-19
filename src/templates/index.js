const path = require('path');

const allContributors = require('./all-contributors');
const gitIgnore = require('./gitIgnore');
const license = require('./license');
const packageJson = require('./package');
const readme = require('./readme');

module.exports = config => [
  {
    contents: allContributors(config),
    file: '.all-contributorsrc',
    message: 'Created: all-contributorsrc',
    type: 'output'
  },
  {
    contents: packageJson(config),
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
    contents: gitIgnore(config),
    file: '.gitignore',
    message: 'Created: .gitignore',
    type: 'output'
  },
  {
    from: path.join(__dirname, './static'),
    to: '',
    message:
      'Created: .travis' +
      '\nCreated: CONTRIBUTING.md' +
      '\nCreated: EXAMPLES.md' +
      '\nCreated: ROADMAP.md' +
      '\nCreated: ISSUE_TEMPLATE.md' +
      '\nCreated: PULL_REQUEST_TEMPLATE.md',
    type: 'copy'
  }
];
