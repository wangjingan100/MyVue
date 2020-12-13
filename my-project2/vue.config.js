// const path = require('path')
const webpack = require('webpack')

module.exports = {
  /*
  Vue-CLI 为了方便起见对 webpack原有的属性进行了一层封装，如果我们需要修改webpack的配置，那么我们可以在项目中新建一个 vue.config.js的文件，然后取查询Vue-CLI的封装是否满足我们的需求，如果不满足我们的需求，那么我们可以通过configureWebpack的属性来编写原生的webpack配置
  */
  outputDir: 'bundle',
  configureWebpack: {
    // 可以在这里编写原生的webpack配置
    plugins: [
      new webpack.BannerPlugin({
        banner: '安哥-静安' // 打包好的文件中会添加这句话 作为版权信息
      })
    ]
  }
}
