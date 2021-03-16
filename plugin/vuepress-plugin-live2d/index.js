const { resolve } = require("path");

module.exports = {
  name: 'live2d',
  enhanceAppFiles: resolve(__dirname, 'enhanceAppFile.js'),
  globalUIComponents: 'Live2D'
};
