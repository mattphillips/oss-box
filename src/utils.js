const Task = require('data.task');

const compose = (...fns) => fns.reduce((f, g) => a => f(g(a)));

const join = str => xs => xs.join(str);

const nonEmpty = input => input !== '';

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
  join,
  nonEmpty,
  promiseToTask,
  trim
};
