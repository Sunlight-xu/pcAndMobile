const path = require('path')
module.exports = {
  devServer: {
    open: true,
    port: 8080,
    historyApiFallback: {
      verbose: true,
      rewrites: [
        { from: /^\/pc\/.*$/, to: '/index.html'},
        {from: /^\/mobile\/.*$/, to: '/mobile.html'}
      ]
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
  configureWebpack: (config) => {
    Object.assign(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/common'),
          '@m': path.resolve(__dirname, './src/pages/mobile'),
          '@p': path.resolve(__dirname, './src/pages/pc')
        }
      }
    })
  },
  pages: {
    pc: {
      entry: 'src/pages/pc/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'pc page',
      chunks: ['chunk-vendors', 'chunk-common', 'pc'],
    },
    mobile: {
      entry: 'src/pages/mobile/main.js',
      template: 'public/mobile.html',
      filename: 'mobile.html',
      title: 'mobile page',
      chunks: ['chunk-vendors', 'chunk-common', 'mobile'],
    }
  }
}