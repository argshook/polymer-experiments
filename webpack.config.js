const webpack = require('webpack');
const path = require('path');
const deepAssign = require('deep-assign');

const config = {
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[file].map'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        loader: 'babel?presets=es2015&compact=false'
      },
      {
        test: /\.s?css$/,
        loaders: ['css', 'postcss', 'sass']
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ],

    preLoaders: [
      {
        test: /\/components\/.+\.js$/,
        loader: 'polymer',
        query: {
          templateExtension: 'html',
          styleExtension: 'scss'
        }
      }
    ]
  },

  postcss: function() {
    return [require('autoprefixer')];
  }
};

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'eval-source-map',

  devServer: {
    inline: true,
    hot: true,
    stats: {
      colors: true
    }
  }
};

const prodConfig = {
  entry: {
    'html-imports': path.resolve(__dirname, 'vendor', 'html-imports.vulcanized.js')
  },

  plugins: (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ])
};

function makeConfig(options) {
  switch (process.env.NODE_ENV) {
    case 'dev':
    default:
      return deepAssign({}, options, devConfig);

    case 'prod':
      return deepAssign({}, options, prodConfig);
  }
}

module.exports = makeConfig(config);

