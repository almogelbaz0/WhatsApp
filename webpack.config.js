// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const WorkboxWebpackPlugin = require( "workbox-webpack-plugin" );

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.tsx",
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: "index.html",
    } ),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ stylesHandler, "css-loader", "postcss-loader", "sass-loader" ],
      },
      {
        test: /\.css$/i,
        use: [ stylesHandler, "css-loader", "postcss-loader" ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        }
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'dist' ),
  },
};

module.exports = () =>
{
  if ( isProduction )
  {
    config.mode = "production";

    config.plugins.push( new WorkboxWebpackPlugin.GenerateSW() );
  } else
  {
    config.mode = "development";
  }
  return config;
};
