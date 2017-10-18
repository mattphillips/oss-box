const { trim } = require('./utils');

module.exports = ({ copy, write }) => path => files =>
  files.reduce(
    (program, { contents, file, from, message, type, to }) => {
      const c = messages => copy(from, `${path}/${to}`, messages.concat(message));
      const w = messages => write(`${path}/${file}`, trim(contents), messages.concat(message));

      if (type === 'copy') return program.chain(c);

      return program.chain(w);
    },
    { chain: t => t([]) }
  );
