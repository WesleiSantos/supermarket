const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UnglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");
//const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  /*entry:{
    app: SRC_DIR + '/index.js',
    vendor: ["react","react-dom"]
  } */
  entry: './src/index.js',
  output: {
    //path: path.resolve(__dirname, 'dist'),
    //filename: '[name].js'
    path: path.resolve(__dirname + "/dist"),
    filename: "main.js",
    library: 'libary'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: [path.join(__dirname, 'public'),path.join(__dirname, 'assets')],
    port: 9000,
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", "*"],
    alias: {
      'babel-runtime' : path.resolve(__dirname + "/node_modules", 'babel-runtime'),
      modules: __dirname + "/node_modules",
      bootstrap: "/node_modules/bootstrap/dist/js/bootstrap.js",
    }
  },
  /*optimization: {
    minimizer: [
      new UnglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },*/
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      /*filename: '[name].css',
      chunkFilename: '[id].css'*/
    }),
   // new DashboardPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
  }),
    new HtmlWebpackPlugin({template: './public/index.html',filename: 'index.html',
    favicon: './public/favicon.ico'})
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader', //interpreta @import, url()...
          
        ]
      },
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use:[{
          loader: "babel-loader",
          options: {
            presets: [ "@babel/preset-env",
            "@babel/preset-react"]
          },
        }],
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.png|.svg|.jpg|.jpeg|.gif|.woff|.woff2|.ttf|.eot*.*$/,
        use : ['file-loader?name=[name].[ext]']
      }, 
      /*{
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },*/
    ],
  },
};
