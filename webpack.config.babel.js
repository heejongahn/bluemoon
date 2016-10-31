import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import flexfix from 'postcss-flexbugs-fixes';

const plugins = [
  new ExtractTextPlugin('bluemoon.css'),
];

const distPath = path.resolve('./dist');

export default {
  entry: './entry.js',
  output: {
    path: distPath,
    publicPath: '/',
    filename: 'bluemoon.js',
  },
  resolve: {
    extensions: ['', '.js', '.styl']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css!postcss!stylus'])
      },
    ]
  },
  plugins: plugins,
  postcss: [ autoprefixer(), flexfix() ]
};
