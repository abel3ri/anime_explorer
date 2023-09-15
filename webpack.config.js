module.exports = {
  mode: "development",
  entry: {
    app: "./app.js",
    details: "./utils/details.js",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].bundle.js",
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
