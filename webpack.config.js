// webpack.config.js
export const module = {
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/],
            },
            exclude: /node_modules/,
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
    ],
    plugins: [
        // ...
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
      ]
};