const webpackConfig = require('./webpack.conf');

module.exports = function (config) {
  config.set({

    frameworks: ['jasmine'],

    browsers: ['ChromeHeadless'],

    port: 9878,

    basePath: '',

    files: [
      { pattern: './karma-test-shim.js', watched: false }
    ],

    preprocessors: {
      './karma-test-shim.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress']

  });
};

