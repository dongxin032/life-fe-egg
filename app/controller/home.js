'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // 从session中获取username
    const username = ctx.session.username
    console.log(ctx.session.counter)
    await ctx.render('ejs_test.html', {
      id: 2021,
      name: '测试用户',
      username,
      age: 18,
      nowTime: app.timeProp,
      skills:[
        '泰式按摩',
        '精油搓背',
        '水疗SPA'
      ]
    })
  }
}

module.exports = HomeController;
