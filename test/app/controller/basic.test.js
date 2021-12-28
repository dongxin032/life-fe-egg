'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/jspang.test.js', () => {
  it('should GET /', () => {
    return app.httpRequest()
      .get('/jspang')
      .expect('<h1>test page</h1>')
      .expect(200);
  });

  it('should GET /', async () => {
    await app.httpRequest()
      .get('/async')
      .expect('<h1>test come here!</h1>')
      .expect(200);
  });
});
