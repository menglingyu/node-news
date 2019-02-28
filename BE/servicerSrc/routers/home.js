
    
const router = require('koa-router')()

router.get('/', ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
      <li><a href="/api/get/data.json">/api/get/data.json</a></li>
      <li><a href="/api/get/user.json">/api/get/user.json</a></li>
    </ul>
  `
  ctx.body = html
})



export default router