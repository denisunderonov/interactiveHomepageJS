// path — встроенный в Node.js модуль
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/scripts/script.js',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'), 
    },
    hot: true, 
    port: 7000, 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.svg$/,
      use: [
          {
              loader: 'url-loader',
              options: {
                  limit: 8192 // 
              }
          }
      ]
    },
    {
        test: /\.(gif|jpg|png|mp3|aac|ogg)$/,
        loader: 'file'
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src', to: '' }, 
      ],
    }),
  ]
}