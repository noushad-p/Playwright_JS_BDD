const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features',
  timeout: 30 * 1000, // 30 seconds
  retries: 1,
  reporter: [['list'], ['json', { outputFile: 'test-results/results.json' }]],
});
