module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/build/js",
    filename: "main.js",
    sourceMapFilename: "[file].map",
    devtoolModuleFilenameTemplate: (info) =>
      `webpack:///${info.absoluteResourcePath.replace(/\\/g, "/")}`,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
