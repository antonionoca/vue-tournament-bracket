require('babel-register')

let chromeDriverPath = require('chromedriver').path;

// for snap-ci:
//  https://docs.snap-ci.com/the-ci-environment/testing-with-browsers/
if (process.env.SNAP_CI) {
  chromeDriverPath = '/usr/local/bin/chromedriver'
}

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  "src_folders": ["test/e2e/specs"],
  "output_folder": "test/e2e/reports",
  "custom_assertions_path": ["test/e2e/custom-assertions"],

  "selenium": {
    "start_process": true,
    "server_path": "node_modules/selenium-server/lib/runner/selenium-server-standalone-2.53.1.jar",
    "host": "127.0.0.1",
    "port": 4484,
    "cli_args": {
      "webdriver.chrome.driver": chromeDriverPath
    }
  },

  "test_settings": {
    "default": {
      "selenium_port": 4484,
      "selenium_host": "localhost",
      "silent": true
    },

    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
