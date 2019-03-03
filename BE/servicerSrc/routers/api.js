const router = require("koa-router")();
import Iconv from "iconv-lite";
import { getCarList } from "../services/carFamily";

router.get("/car", async ctx => {
    const res = await getCarList();
    const _data = Iconv.decode(res, "gb2312").toString();
    // console.log(JSON.stringify(_data));
    const _1 = _data.split("(")[1];
    const data = _1.split(")")[0];
    ctx.body = {
      success: true,
      data: JSON.parse(data)
      // text: '我是api
    };
  })
  .get("/get/user.json", ctx => {
    ctx.body = {
      success: true,
      data: {
        text: "my name is koa.js!"
      }
    };
  });

export default router;
