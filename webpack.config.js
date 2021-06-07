const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index',
  },
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: port,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@features': path.resolve(__dirname, 'src/js/features'),
      '@components': path.resolve(__dirname, 'src/js/components'),
      '@hooks': path.resolve(__dirname, 'src/js/hooks'),
      '@store': path.resolve(__dirname, 'src/js/store'),
      '@api': path.resolve(__dirname, 'src/js/api'),
      '@helper': path.resolve(__dirname, 'src/js/helper'),
      customHook: path.resolve(__dirname, 'src/js/hooks'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(axios))/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
