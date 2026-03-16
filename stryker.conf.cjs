/**
 * Stryker configuration for mutation testing.
 * Uses Mocha as the test runner for JavaScript files in src/main.
 */
module.exports = {
  mutate: ['src/main/**/*.js', '!src/main/app.js', '!src/main/start.js'],
  testRunner: 'mocha',
  mochaOptions: {
    spec: ['tests/unit/**/*.test.js'],
    require: []
  },
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'perTest',
  timeoutMS: 60000,
  thresholds: {
    high: 80,
    low: 60,
    break: 50
  }
}

