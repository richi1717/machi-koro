var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var stylelint = require('stylelint');
var webpack = require('webpack');

const PATHS = {
  config: path.join(__dirname, './config'),
  spec: path.join(__dirname, 'test'),
  app: path.join(__dirname, 'src'),
  components: path.join(__dirname, './components'),
  css: path.join(__dirname, 'scss')
};

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: "inline-source-map",
  plugins: [
      new HtmlwebpackPlugin({
        title: 'Machi Koro',
        template: 'build/index.html',
        inject: true
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        "window.jQuery": 'jquery'
      })
  ],
  module: {
    preLoaders: [

        {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
        {test: /\.scss$/, loaders: ['postcss'], include: PATHS.css}

    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        include: [
          PATHS.app,
          PATHS.components
        ],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
         loaders: ["style", "css?sourceMap", "sass?sourceMap"],
        // loaders: "style-loader!css-loader!sass-loader",
        include: [
          PATHS.css,
          PATHS.components
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  postcss: function () {
    return [stylelint({
      extends: [PATHS.config + "/.stylelintrc"],
      rules: {
        'color-hex-case': 'lower'
      }
    })];
  },
  eslint: {
    configFile: PATHS.config + '/.eslintrc',
    rules: {
      "no-var": 0,
      "no-unused-vars": 0
    }
  }
}
