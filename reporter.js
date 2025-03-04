const reporter = require('cucumber-html-reporter')

// These options will be used at the time of HTML Report generation
const options = {
  theme: 'bootstrap',
  jsonFile: 'test-results/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '2.0.0',
    'Test Environment': 'STAGING',
    Browser: 'Chrome 114.0.4951.41',
    Platform: 'MAC OS  - Version: 1',
    Parallel: 'Scenarios',
    Executed: 'Remote',
  },
}

reporter.generate(options)

