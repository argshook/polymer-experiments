const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.js'),
    'html-imports': path.resolve(__dirname, 'vendor', 'html-imports.vulcanized.js')
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
        loader: 'babel?presets=es2015'
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

  devtool: 'source-map',

  devServer: {
    inline: true,
    hot: true,
    stats: {
      colors: true
    }
  }
};

function makeConfig(options) {
  if (process.env.NODE_ENV !== 'prod') {
    return require('deep-assign')({}, options, devConfig);
  }

  return options;
}

module.exports = makeConfig(config);

