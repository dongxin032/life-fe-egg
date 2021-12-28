'use strict';

const Controller = require('egg').Controller;

class JsPangController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.session.counter)
    ctx.body = '<h1>test page</h1>';
  }

  // 异步模拟
  async getAsync() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>async page!</h1>');
      }, 3000);
    });
  }

  // get模拟，自由模式
  async getPage() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }

  // get模拟，严格模式
  async getPageStrict() {
    const { ctx } = this;
    let name = ctx.params.name;
    let age = ctx.params.age;
    ctx.body = `${name}: ${age}`;
  }

  // post模式
  async postPage() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body
    }
  }

  // 设置cookie/session
  async add() {
    const ctx = this.ctx
    console.log(ctx.request.body)
    ctx.session.username = 'session测试'
    // cookies三个参数 name/value/options
    ctx.cookies.set('user', '测试一下', {
      // 设置2分钟后cookie过期
      maxAge: 2 * 60 * 1000,
      // 设置加密
      encrypt: true
    })
    ctx.body = {
      status: 200,
      data: 'Cookie添加成功'
    }
  }

  // 删除cookie/session
  async del() {
    const ctx = this.ctx
    ctx.session.username = null
    ctx.cookies.set('user', null)
    ctx.body = {
      status: 200,
      data: 'Cookie删除成功'
    }
  }

  // 更新cookie
  async editor() {
    const ctx = this.ctx
    ctx.cookies.set('user', 'bilibili')
    ctx.body = {
      status: 200,
      data: 'Cookie更新成功'
    }
  }

  // 查看cookie
  async show() {
    const ctx = this.ctx
    const user = ctx.cookies.get('user', {
      encrypt: true
    })
    console.log(user)
    ctx.body = {
      status: 200,
      data: 'Cookie显示成功'
    }
  }
}

module.exports = JsPangController;
