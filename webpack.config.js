//allows webpack to use nodes
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const env = process.env.NODE_ENV;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index.js"
  },
  devServer: {
    lazy: true,
    filename: "./dist/index.js",
    inline: true,
    port: 3002,
    historyApiFallback: true,
    open: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "env", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",

              options: { importLoaders: 1 }
            },

            "postcss-loader"
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/,
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ]
};
