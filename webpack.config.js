// path — встроенный в Node.js модуль
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/scripts/script.js',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'), // Путь к статическим файлам
    },
    hot: true, // Включение Hot Module Replacement
    port: 7000, // Порт для запуска сервера (необязательно)
  },
  // Описываем, куда следует поместить результат работы:
  output: {
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, 'dist'),
    // Имя файла со сборкой:
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // ...другие правила
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
  }
}