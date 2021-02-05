const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UnglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  /*entry:{
    app: SRC_DIR + '/index.js',
    vendor: ["react","react-dom"]
  } */
  entry: {
    index: './src/index.js',
    store: './src/storeProducts.js',
    user: './src/user.js'
  },
  output: {
    //path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    //filename: "main.js",
    chunkFilename: '[id].chunk.js',
    library: 'libary',
    publicPath: '/',
    path: path.resolve(__dirname, "dist"),

  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: {
      rewrites: [
        {from:  /\/products/, to: path.resolve(__dirname + '/public/pages', '/store.html')},
        {from:  /\/user/, to: path.resolve(__dirname + '/public/pages', '/user.html')}
      ]
    },
    //historyApiFallback: true,
    noInfo: true,
    overlay: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'public'),
    port: 9000,
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", "*"],
    alias: {
      'babel-runtime': path.resolve(__dirname + "/node_modules", 'babel-runtime'),
      modules: __dirname + "/node_modules",
      bootstrap: "/node_modules/bootstrap/dist/js/bootstrap.js",
      assets: __dirname +"/src/assets"
    }
  },
  optimization: {
    minimizer: [
      new UnglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      //filename: "style.css",
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    // new DashboardPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/pages/index.html', filename: 'index.html',
      favicon: './public/favicon.ico'
    }),
    new HtmlWebpackPlugin({template: './public/pages/store.html', filename:'store.html'}),
    new HtmlWebpackPlugin({template: './public/pages/user.html', filename:'user.html'}),

  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader
          ,
          'css-loader'
          ,
          'sass-loader'

          /*'style-loader',
           MiniCssExtractPlugin.loader,
          'css-loader', //interpreta @import, url()...
          "sass-loader"*/
        ]
      },
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        //include: path.resolve(__dirname, "src"),
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["@babel/preset-env",
              "@babel/preset-react"]
          },
        }],
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.png|.svg|.jpg|.jpeg|.gif|.woff|.woff2|.ttf|.eot*.*$/,
        use: ['file-loader?name=[name].[ext]'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
};
