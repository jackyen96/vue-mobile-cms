//由于webpack是基于node进行构建的,所以,webpack的配置文件中,任何合法的node代码都是支持的
const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname,'./dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebPackPlugin({
      template: path.join(__dirname,'./src/index.html'),
      filename: 'index.html' //设置生成的内存页面名称
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.jpg|png|gif|bmp|jepg$/,
        use: 'url-loader?limit=7632&name=[hash:8]-[name].[ext]'
        //limit的值是图片的大小,如果大于等于这个值就不会转换为base64
      },
      {
        test: /\.ttf|eot|svg|woff|woff2$/,
        use: 'url-loader' 
        //这是处理字体文件的loader
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
        //这是配置babel来转换高级的ES语法
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}