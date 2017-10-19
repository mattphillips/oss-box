module.exports = ({ author, description, name, owner }) => `
{
  "name": "${name}",
  "version": "0.0.1",
  "description": "${description}",
  "main": "dist/index.js",
  "scripts": {
  },
  "keywords": [],
  "author": "${author}",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/${owner}/${name}.git"
  },
  "bugs": {
    "url": "https://github.com/${owner}/${name}/issues"
  },
  "homepage": "https://github.com/${owner}/${name}#readme"
}
`;
