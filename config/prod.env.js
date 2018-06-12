const version = require('../package.json').version
const execSync = require('child_process').execSync

let lastCommit, buildNumber;
try {
  lastCommit = execSync('git rev-list HEAD --max-count=1').toString().replace(/\n/, '')
} catch (e) {
  lastCommit = null
}

try {
  buildNumber = execSync('git rev-list HEAD --count').toString().replace(/\n/, '')
} catch (e) {
  buildNumber = 0
}

module.exports = {
  NODE_ENV: '"production"',
  __version__: `"v${version}"`,
  __hash__: `"${buildNumber}"`,
  __build__: `"${lastCommit}"`
}
