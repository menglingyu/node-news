const router = require('koa-router')()

router.get('/get/data.json', (ctx) => {
    ctx.body = {
        success: true,
        data: {
            text: '我是api'
        }
    }
}).get('/get/user.json', (ctx) => {
    ctx.body = {
        success: true,
        data: {
            text: 'my name is koa.js!'
        }
    }
})

export default router