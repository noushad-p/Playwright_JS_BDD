// This is done to do the mapping for Assertions, Hooks and Step Definition files 
// const common = `
//     --require setup/assertions.js
//     --require setup/hooks.js
//     --require step-defitions/**/*.step.js
// `
module.exports = {
  default: {
    require: [
      './step-definitions/**/*.js',
      './setup/hooks.js' // Include any hooks if you've defined them
    ],
    format: [
      'json:./test-results/cucumber_report.json',
      // 'node_modules/@cucumber/pretty-formatter'
    ],
    paths: ['./features/*.feature'],
    // publishQuiet: true
  }
};


