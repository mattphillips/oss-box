const Task = require('data.task');

const { promiseToTask } = require('./utils');

const copy = fs => (from, to, result) => promiseToTask(() => fs.copy(from, to).then(() => result));

const write = fs => (filename, contents, result) =>
  promiseToTask(() => fs.outputFile(filename, contents).then(() => result));

const exists = fs => (path, result) =>
  new Task(async (rej, resolve) => {
    try {
      const outcome = await fs.pathExists(path);
      if (outcome) return rej('Error given path already exists');
      return resolve(result);
    } catch (e) {
      return rej(e);
    }
  });

module.exports = fs => ({
  copy: copy(fs),
  exists: exists(fs),
  write: write(fs)
});
