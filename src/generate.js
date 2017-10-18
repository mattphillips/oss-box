const fs = require('fs-extra');

const { promiseToTask, trim } = require('./utils');

const concat = (a, b) => () => a.concat(b);

const copy = (from, to, msg) => msgs => promiseToTask(() => fs.copy(from, to).then(concat(msgs, msg)));

const write = (filename, contents, msg) => msgs =>
  promiseToTask(() => fs.outputFile(filename, contents).then(concat(msgs, msg)));

const fileToTask = (path, { contents, file, from, message, type, to }) =>
  type == 'copy' ? copy(from, `${path}/${to}`, message) : write(`${path}/${file}`, trim(contents), message);

module.exports = path => files =>
  files.reduce((program, file) => program.chain(fileToTask(path, file)), { chain: t => t([]) });
