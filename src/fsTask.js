const { promiseToTask } = require('./utils');

const copy = fs => (from, to, result) => promiseToTask(() => fs.copy(from, to).then(() => result));

const write = fs => (filename, contents, result) =>
  promiseToTask(() => fs.outputFile(filename, contents).then(() => result));

module.exports = fs => ({
  copy: copy(fs),
  write: write(fs)
});
