const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/js/script.js',
    './src/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.js'
  },   
  module: {
    rules: [
      {
        test: /\.(html)$/,                
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader",
            options: {              
              url: false
            }
          },
          {
            loader: "sass-loader"            
          }
        ]      
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'img/[name].[ext]'}  
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({      
      filename: "./css/style.bundle.css"      
    }),    
    new CopyWebpackPlugin([  
      {
        from: './src/index.html',
        to: './'
      },    
      {
        from: './src/img',
        to: './img'
      }
    ])
  ]
};