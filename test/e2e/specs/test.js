// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('.app', 10000)
      .assert.elementPresent('.logo')
      .assert.containsText('h1', 'Hello World!')
      .end()
  }
}
