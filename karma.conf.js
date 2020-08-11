// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-typescript')
    ],
    angularCli: {
      environment: 'dev'
    },
    files: [
      { pattern: "base.spec.ts" },
      { pattern: "src/**/*.+(ts|html)" }
    ],
    karmaTypescriptConfig: {
            bundlerOptions: {
                entrypoints: /\.spec\.ts$/,
                transforms: [
                    require("karma-typescript-angular2-transform")
                ]
            },
            compilerOptions: {
                lib: ["ES2015", "DOM"]
            }
    },
    preprocessors: {'**/*.ts': 'karma-typescript'
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    reporters: ["dots", "karma-typescript"],
    port: 9876,
    colors: true,
    browserNoActivityTimeout: 80000,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};