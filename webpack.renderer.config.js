const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path')

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
// });

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@types': path.resolve(__dirname, './src/common/types'),
      '@back-end': path.resolve(__dirname, './src/back-end'),
      '@components': path.resolve(__dirname, './src/front-end/components'),
      '@front-end': path.resolve(__dirname, './src/front-end')
    }
  },
};
