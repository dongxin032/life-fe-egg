"use strict";

const Controller = require("egg").Controller;

class StudyManage extends Controller {
  async addStudy() {
    const { ctx } = this;
    const params = {
      name: '你不知道的javascript',
      age: 18,
      skull: '测试'
    }
    const res = await ctx.service.testdb.addStudy(params);
    ctx.body = "添加课程成功";
  }

  async delStudy() {
    const { ctx } = this;
    const res = await ctx.service.testdb.delStudy(60)
    if(res){
      ctx.body = '删除课程成功-成功';
    }else{
      ctx.body = '删除失败';
    }
  }

  async updateStudy() {
    const { ctx } = this;
    const params = {
      id: 1,
      name: '你知道的javascript',
      age: 19,
      skull: '测试一下'
    }
    const res = await ctx.service.testdb.updateStudy(params)
    if(res){
      ctx.body = '修改课程成功-成功';
    }else{
      ctx.body = '修改失败';
    }
  }

  async getStudys() {
    const { ctx } = this;
    const res = await ctx.service.testdb.getStudys()
    ctx.body = `查询课程: ${JSON.stringify(res)}`;
  }
}

module.exports = StudyManage;
