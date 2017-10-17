module.exports = ({ author, description, name }) => `
{
  "name": "${name}",
  "version": "0.0.1",
  "description": "${description}",
  "main": "dist/index.js",
  "scripts": {
  },
  "keywords": [],
  "author": "${author}",
  "license": "MIT"
}
`;
