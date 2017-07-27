const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "./dist/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: ['less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/, 
        use: 'url-loader?limit=4192&name=[name].[ext]' 
      },

      {
        test: /\.html$/, 
        use: ['html-loader'] 
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'] 
      }

    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins:[
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        })
    ]
}

module.exports = config;