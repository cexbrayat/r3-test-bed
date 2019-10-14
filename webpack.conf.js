const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'ts-loader',
          'angular2-template-loader'
        ]
      }
    ]
  },

  /**
   * Provides context to Angular's use of SystemJS.import
   *
   * see https://github.com/angular/angular/issues/11580
   */
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /\@angular(\\|\/)core(\\|\/)esm5/,
      './src', // location of your src
      {} // a map of your routes
    )
  ]
};
