const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.resolve(__dirname),
    filename: '[name].min.js',
    publicPath: '/'
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
        loaders: ['css', 'sass']
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
  }
};

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    inline: true,
    hot: true,
    stats: {
      colors: true
    }
  }
};

function makeConfig(options) {
  if(process.env.NODE_ENV !== 'prod') {
    return require('deep-assign')({}, options, devConfig);
  }

  return options;
}

module.exports = makeConfig(config);

