/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const sourcePath = `${__dirname}/src`;
const staticsPath = `${__dirname}/dist`;

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const isRunningOnCi = process.env.CI || false;

const plugins = [
  new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
];

if (!isRunningOnCi) plugins.push(new BundleAnalyzerPlugin());

const config = {
  devtool: isProd ? false : 'eval-source-map',
  context: sourcePath,
  entry: {
    bundle: './main.ts',
  },
  target: 'node',
  output: {
    path: staticsPath,
    filename: 'main.js',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [ PnpWebpackPlugin ],
  },
  resolveLoader: {
    plugins: [ PnpWebpackPlugin.moduleLoader(module) ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: sourcePath,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
  plugins,
};

module.exports = config;
