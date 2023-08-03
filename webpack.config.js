const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/public';

module.exports = {
  entry: './src/index.js', // Note that without this option webpack just try find entry in ./src/
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'], // For the correct resolve index files without specifying the extension
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // For correct resolve files from public dir in dev mode
    },
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: [
            ['@babel/preset-env', { targets: "ie 9" }],
            ['@babel/preset-react', { "runtime": "automatic" }] // "runtime": "automatic" need to enable new jsx transform and do not import react
          ]}
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' }, // Inject CSS into the DOM (Creates `style` nodes from JS strings)
          { loader: 'css-loader' }, // Interprets @import and url() and will resolve them (Translates CSS into CommonJS)
          { loader: 'sass-loader', // Compiles Sass to CSS
            options: {
              implementation: require("sass"), // Prefer `dart-sass`
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};
