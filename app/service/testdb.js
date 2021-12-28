"use strict";

const Service = require('egg').Service;

class testdbService extends Service {
  // 添加数据库
  async addStudy(params) {
    try {
      const { app } = this;
      const res = await app.mysql.insert('study', params);
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
  
  // 删除数据库
  async delStudy(id) {
    try {
      const { app } = this;
      const res = await app.mysql.delete('study', { id })
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
    
  // 修改数据库
  async updateStudy(params) {
    try {
      const { app } = this;
      const res = await app.mysql.update('study', params);
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
  
  // 查询数据库
  async getStudys(id) {
    try {
      const app = this.app;
      const res = await app.mysql.select('study')
      return res
    } catch(error) {
      console.log(error)
      return null
    }
  }
}

module.exports = testdbService;
