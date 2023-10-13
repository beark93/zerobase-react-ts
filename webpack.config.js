import path from 'path';
import { webpack } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __dirname = path.resolve();
const tsConfigPath = path.resolve(__dirname, 'tsconfig.json');

export default function config(env, argv) {
  return {
    devtool: argv.mode ? 'source-map' : 'cheap-module-source-map',
    mode: argv.mode,
    entry: path.join(__dirname, 'src/index.tsx'),
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
      static: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.json'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: tsConfigPath,
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
        React: 'react',
        process: 'process/browser.js',
      }),
    ],
  };
}
