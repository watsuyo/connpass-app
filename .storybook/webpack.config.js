module.exports = ({ config }) => {
  config.resolve.extensions.push(
    '.ts',
    '.tsx',
    '.vue',
    '.css',
    '.scss',
    '.html'
  )
  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }
    ]
  })
  config.module.rules.push({
    test: /\.less$/,
    loaders: ['style-loader', 'css-loader']
  })
  return config
}
