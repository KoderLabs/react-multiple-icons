var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ReactIcons.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "ReactIcons.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
