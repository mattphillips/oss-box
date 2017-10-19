const Task = require('data.task');

const compose = (...fns) => fns.reduce((f, g) => a => f(g(a)));

const join = separator => xs => xs.join(separator);

const nonEmpty = str => str !== '';

const promiseToTask = promise =>
  new Task((reject, resolve) =>
    promise()
      .then(resolve)
      .catch(reject)
  );

const trim = str => `${str.trim()}\n`;

module.exports = {
  compose,
  join,
  nonEmpty,
  promiseToTask,
  trim
};
