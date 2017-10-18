module.exports = ({ description, name, owner }) => `
<div align="center">
<h1>${name}</h1>

${description}
</div>

<hr />

[![Build Status](https://img.shields.io/travis/${owner}/${name}.svg?style=flat-square)](https://travis-ci.org/${owner}/${name})
[![Code Coverage](https://img.shields.io/codecov/c/github/${owner}/${name}.svg?style=flat-square)](https://codecov.io/github/${owner}/${name})
[![version](https://img.shields.io/npm/v/${name}.svg?style=flat-square)](https://www.npmjs.com/package/${name})
[![downloads](https://img.shields.io/npm/dm/${name}.svg?style=flat-square)](http://npm-stat.com/charts.html?package=${name}&from=2017-09-14)
[![MIT License](https://img.shields.io/npm/l/${name}.svg?style=flat-square)](https://github.com/${owner}/${name}/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](https://github.com/${owner}/${name}/blob/master/docs/ROADMAP.md)
[![Examples](https://img.shields.io/badge/%F0%9F%92%A1-examples-ff615b.svg?style=flat-square)](https://github.com/${owner}/${name}/block/master/docs/EXAMPLES.md)
## Problem

## Solution

## Installation

With npm:
\`\`\`sh
npm install --save-dev ${name}
\`\`\`

With yarn:
\`\`\`sh
yarn add -D ${name}
\`\`\`

## Setup

## Usage

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

MIT
`;
