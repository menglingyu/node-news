const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
import mongooseStartFun from './mongodb'
const cors = require("koa2-cors");

const router = require('./routers/index')

const _PORT = 3000 // 服务端端口号


const app = new Koa();
// app.use(bodyParser());  // 解析request的body

mongooseStartFun()  // 运行mongodb

app.use(
  cors({
    origin: function(ctx) {
      return "*"
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
  })
);

app.use(router.routes()).use(router.allowedMethods()) // 初始化路由中间件
app.listen(_PORT);