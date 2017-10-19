<div align="center">
<h1>oss-box</h1>

📦

Open source project boilerplate generator
</div>

<hr />

[![Build Status](https://img.shields.io/travis/mattphillips/oss-box.svg?style=flat-square)](https://travis-ci.org/mattphillips/oss-box)
[![Code Coverage](https://img.shields.io/codecov/c/github/mattphillips/oss-box.svg?style=flat-square)](https://codecov.io/github/mattphillips/oss-box)
[![version](https://img.shields.io/npm/v/oss-box.svg?style=flat-square)](https://www.npmjs.com/package/oss-box)
[![downloads](https://img.shields.io/npm/dm/oss-box.svg?style=flat-square)](http://npm-stat.com/charts.html?package=oss-box&from=2017-09-14)
[![MIT License](https://img.shields.io/npm/l/oss-box.svg?style=flat-square)](https://github.com/mattphillips/oss-box/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](https://github.com/mattphillips/oss-box/blob/master/docs/ROADMAP.md)
[![Examples](https://img.shields.io/badge/%F0%9F%92%A1-examples-ff615b.svg?style=flat-square)](https://github.com/mattphillips/oss-box/blob/master/docs/EXAMPLES.md)

## Problem

Starting a new open source project is a pain to setup all of the boilerplate

## Solution

Automate as much of the boilerplate as possible 😎. `oss-box` is an interactive generator of new open source
JavaScript projects.

## Installation

With npm:
```sh
npm install -g oss-box
```

With yarn:
```sh
yarn global add oss-box
```

## Usage

Run the following and answer the prompts
```bash
oss-box my-cool-project
```

Will generate the following project:

```
my-cool-project
├── .all-contributorsrc
├── .github
│   ├── ISSUE_TEMPLATE.md
│   └── PULL_REQUEST_TEMPLATE.md
├── .gitignore
├── .travis.yml
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── docs
│   ├── EXAMPLES.md
│   └── ROADMAP.md
└── package.json
```

## Defaults

This generator has the following defaults:

 - CI: [Travis](https://travis-ci.org/) is the default continuous integration provider
 - Code coverage: [Codecov](https://codecov.io/) is the default code coverage provider
 - License: [MIT](https://opensource.org/licenses/MIT)
 - Contributors: [all-contributors](https://github.com/kentcdodds/all-contributors) specification is configured to
 acknowledge contributors to the project from everyone

## Other solutions

This package is inspired by [@kentcdodds](https://github.com/kentcdodds)'s [generator-kcd-oss](https://github.com/kentcdodds/generator-kcd-oss) project

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/5610087?v=4" width="100px;"/><br /><sub>Matt Phillips</sub>](http://mattphillips.io)<br />[💻](https://github.com/mattphillips/oss-box/commits?author=mattphillips "Code") [📖](https://github.com/mattphillips/oss-box/commits?author=mattphillips "Documentation") [🚇](#infra-mattphillips "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

MIT
