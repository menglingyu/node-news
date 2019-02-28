const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
import mongooseStartFun from './mongodb'
// import routers from './routers'
// const routers = require('./routers')
const router = require('./routers/index')

const _PORT = 3000 // 服务端端口号


const app = new Koa();
// app.use(bodyParser());  // 解析request的body

mongooseStartFun()  // 运行mongodb

// app.use(routers.routes()).use(routers.allowedMethods()) // 初始化路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(_PORT);