const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,

  experimentalStudio: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://staging.omnicloud.tech/',
    specPattern: 'cypress/e2e/**/*{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*']

  },
})
