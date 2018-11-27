const fs = require('fs')
const chalk =require('chalk')
const path = require('path')
const defaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
const env = process.env.IONIC_ENV
/**
 * @param {*} loaders 
 */
/* const cacelSourceMap = (loaders) => {
  if (loaders.length > 0) {
    loaders.forEach(loader => {
      if (loader.options) loader.options.sourceMap = false
      if (Array.isArray[loader.loader] && loader.loader.length > 0) {
        console.log(`nexts`);
        cacelSourceMap(loader.loader)
      }
    })
  }
}
// sourceMap处理函数
const sourceMaps = new Map([
  ['dev', () => {}],
  ['prod', () => {
    let loaders = defaultConfig.prod.module.loaders
    // 取消sourceMap
    cacelSourceMap(loaders)
  }]
])
sourceMaps.get(env)() */
/**
 * 获取配置文件
 * @param {*} env 
 */
function configPath(env) {
  const filePath = `./src/config/config.${env}.ts`
  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}
console.log("当前环境为："+env)
// 设置环境变量
defaultConfig.prod.resolve.alias = {
  "@config": path.resolve(configPath('prod'))
}
defaultConfig.dev.resolve.alias = {
  "@config": path.resolve(configPath('dev'))
}
// 其他环境
if (env !== 'prod' && env !== 'dev') {
  defaultConfig[env] = defaultConfig.dev
  defaultConfig[env].resolve.alias = {
    "@config": path.resolve(configPath(env))
  }
}
// 删除sourceMaps

module.exports = function () {
  return defaultConfig
}