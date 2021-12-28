const moment = require('moment')

module.exports = {
  // 方法扩展
  currentTime() {
    return moment().format('YYYY年MM月DD日 hh:mm:ss');
  },
  // 属性扩展
  get timeProp() {
    return moment().format('YYYY年MM月DD日 hh:mm:ss');
  }
}