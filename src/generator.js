const fs = require('fs-extra');
const templates = require('./templates');

module.exports = config => {
  const project = templates(config);
  const { name } = config;

  const trim = contents => `${contents.trim()}\n`;

  project.forEach(({ contents, file, from, message, type, to }) => {
    const cb = err => {
      if (err) throw err;
      console.log(message); // eslint-disable-line
    };

    if (type == 'copy') {
      fs.copy(from, `./${name}/${to}`, cb);
    }

    if (type == 'output') {
      fs.outputFile(`./${name}/${file}`, trim(contents), cb);
    }
  });
};
