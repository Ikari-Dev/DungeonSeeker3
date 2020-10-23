const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin()
    ],
    devtool: "inline-source-map",
<<<<<<< Updated upstream
    entry: "./src/index.js",
=======
    entry: "./src/main.js",
>>>>>>> Stashed changes
    output: {
      filename: "bundle.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        //{ test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'cess-loader'] },
        { test: /\.vue\.html$/, include: /src/, loader: 'vue-loader', options: { loaders: { js: 'awesome-typescript-loader?silent=true' } } },
        { test: /\.tsx?$/, loader: "ts-loader" },
        { test: /\.vue$/, loader: 'vue-loader' },
        { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.png$/, loader: 'url-loader' },
      ]
    }
  };