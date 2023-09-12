const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolvePath = (dir) => path.resolve(__dirname, dir)

const setting = require('./src/settings.json')

module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: '@arco-design/web-react',
          camel2DashComponentName: false,
          style: true // 样式按需加载
        }
      ],
      [
        'import',
        {
          libraryName: '@arco-design/web-react/icon',
          libraryDirectory: 'react-icon',
          camel2DashComponentName: false
        },
        'second'
      ]
    ]
  },
  // less 配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // 修改 arco 主题颜色
              'arcoblue-6': setting.themeColor
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
    },
    // 配置打包文件夹名称, 静态文件路径
    configure: (webpackConfig, { paths }) => {
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'),
        // 这里根据项目需求更改
        publicPath: process.env.NODE_ENV === 'production' ? '' : ''
      }
      return webpackConfig
    }
  }
  // 配置代理
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       pathRewrite: {
  //          "^/api": ''
  //       }
  //     }
  //   },
  // },
}
