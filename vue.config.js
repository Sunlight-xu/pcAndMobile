const path = require('path')
const plugins = ['@vue/babel-plugin-transform-vue-jsx']
const vConsolePlugin = require('vconsole-webpack-plugin')

module.exports = {
  devServer: {
    open: true,
    port: 8080,
    historyApiFallback: {
      verbose: true,
      rewrites: [
        { from: /^\/pc\/.*$/, to: '/index.html' },
        { from: /^\/mobile\/.*$/, to: '/mobile.html' }
      ]
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'local') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack: config => {
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
    let envType = process.env.NODE_ENV != 'production'
    let pluginsDev = [
      new vConsolePlugin({
          filter: [],
          enable: envType
      })
    ]
    plugins.push('transform-remove-console')
    config.plugins.plugins
    config.plugins = [...config.plugins, ...pluginsDev]
  },
  pages: {
    pc: {
      entry: 'src/pages/pc/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '满分班',
      chunks: ['chunk-vendors', 'chunk-common', 'pc']
    },
    mobile: {
      entry: 'src/pages/mobile/main.js',
      template: 'public/mobile.html',
      filename: 'mobile.html',
      title: '满分班',
      chunks: ['chunk-vendors', 'chunk-common', 'mobile']
    }
  }
}
