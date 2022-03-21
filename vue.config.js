const path = require('path')
const registerRouter = require('./backend/router')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 全局变量路径，不能使用路径别名
        path.resolve(__dirname, 'src/assets/less/variables.less')
      ]
    }
  },
  devServer: {
    before (app) {
      registerRouter(app)
    }
  }
}
