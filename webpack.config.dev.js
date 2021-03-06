import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/js/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']},
      {
        test: /node_modules[\\\/]vis[\\\/].*\.js$/,
        loader: 'babel-loader',
        query: {
            cacheDirectory: true,
            presets: ["es2015"],
            plugins: [
                "transform-es3-property-literals",
                "transform-es3-member-expression-literals",
                "transform-runtime"
            ]
        }
    }
    ]
  }
}