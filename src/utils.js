const Task = require('data.task');

const compose = (...fns) => fns.reduce((f, g) => a => f(g(a)));

const promiseToTask = p =>
  new Task(async (reject, resolve) => {
    try {
      const result = await p();
      return resolve(result);
    } catch (err) {
      return reject(err);
    }
  });

const trim = contents => `${contents.trim()}\n`;

module.exports = {
  compose,
  promiseToTask,
  trim
};
