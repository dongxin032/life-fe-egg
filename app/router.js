'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 为指定的路由配置中间件，第二个参数
  const counter = app.middleware.counter()
  router.get('/', controller.home.index);
  router.get('/jspang', counter, controller.basic.index);
  router.get('/async', controller.basic.getAsync);
  router.get('/getPage', controller.basic.getPage);
  router.get('/getPageStrict/:name/:age', controller.basic.getPageStrict);
  router.post('/postPage', controller.basic.postPage);
  router.post('/add', controller.basic.add);
  router.post('/del', controller.basic.del);
  router.post('/editor', controller.basic.editor);
  router.post('/show', controller.basic.show);
  router.get("/addStudy", controller.studyManage.addStudy);
  router.get("/delStudy", controller.studyManage.delStudy);
  router.get("/updateStudy", controller.studyManage.updateStudy);
  router.get("/getStudys", controller.studyManage.getStudys);
};
