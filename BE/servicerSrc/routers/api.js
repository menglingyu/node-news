const router = require('koa-router')()

router.get('/car', (ctx) => {
    // ctx.;
    ctx.body = {
      success: true,
      data: {
        list: ["汽车之家新闻1", "汽车之家新闻2", "汽车之家新闻3"]
      }
      // text: '我是api
    };
}).get('/get/user.json', (ctx) => {
    ctx.body = {
        success: true,
        data: {
            text: 'my name is koa.js!'
        }
    }
})

export default router