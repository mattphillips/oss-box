const { promiseToTask } = require('./utils');

const copy = fs => (from, to, result) => promiseToTask(() => fs.copy(from, to).then(() => result));

const write = fs => (filename, contents, result) =>
  promiseToTask(() => fs.outputFile(filename, contents).then(() => result));

const exists = fs => (path, result) =>
  promiseToTask(() =>
    fs.pathExists(path).then(outcome => {
      if (outcome) throw new Error(`Error given project path: "${path}" already exists`);
      return result;
    })
  );

module.exports = fs => ({
  copy: copy(fs),
  exists: exists(fs),
  write: write(fs)
});
