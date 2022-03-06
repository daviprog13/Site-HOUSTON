const path = require('path')
module.exports={
  mode: 'development',
  entry: path.resolve(__dirname, 'JS', 'script.js'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },
  resolve:{
    extensions: ['.js'],
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:'babel-loader'
      }
    ]
  }
}