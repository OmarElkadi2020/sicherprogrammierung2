// webpack.config.js
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      },
      exclude: /node_modules/
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
}
