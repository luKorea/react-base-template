const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolvePath = (dir) => path.resolve(__dirname, dir)

module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  // less 配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolvePath('src'),
      components: resolvePath('src/components')
    }
  }
}
