const path = require('path')
const pxToViewport = require('postcss-px-to-viewport')
const CracoLessPlugin = require('craco-less')
const resolvePath = (dir) => path.resolve(__dirname, dir)

// 只会对css
const vw = pxToViewport({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 375, // UI设计稿的宽度
  viewportHeight: 667, // UI
  unitPrecision: 6, // 转换后的精度，即小数点位数
  // propList: 当有些属性的单位我们不希望转换的时候，可以添加在数组后面，并在前面加上!号，如propList: ["*","!letter-spacing"],这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  // 转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，就不会被匹配。比如selectorBlackList: ['wrap'],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
  selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [vw]
        }
      }
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
