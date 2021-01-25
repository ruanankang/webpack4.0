const path = require('path');

// module.exports = {
//   entry: './index.js', // 入口文件
//   output: { // 出口文件
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'output.bundle.js'
//   },
//   mode: 'development' // 模式
// }

module.exports = {
  entry: { // 入口文件 可以是一个对象，多个入口文件
    home: './home.js',
    about: './about.js',
    other: './other.js'
  },
  output: { // 出口文件
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js' // [name]指代入口文件的key
  },
  mode: 'development' // 模式
}