const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: "./src/index.js",
    customize: "./src/customization.js",
    details: "./src/order-details.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist/bundle'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 5500,
    proxy: {
      '/api': {
        target: 'https://qfble0gquj.execute-api.us-east-2.amazonaws.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/plant-store',
        },
      },
    },
  },
};