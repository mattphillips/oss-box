const Task = require('data.task');

const compose = (...fns) => fns.reduce((f, g) => a => f(g(a)));

const join = separator => xs => xs.join(separator);

const nonEmpty = str => str !== '';

const promiseToTask = p =>
  new Task(async (reject, resolve) => {
    try {
      const result = await p();
      return resolve(result);
    } catch (err) {
      return reject(err);
    }
  });

const trim = str => `${str.trim()}\n`;

module.exports = {
  compose,
  join,
  nonEmpty,
  promiseToTask,
  trim
};
