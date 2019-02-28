import mongoose from 'mongoose'
import { config } from '../config'


function mongooseStartFun() {
    mongoose.connect(config.mongodbConfig.url, {
        useMongoClient: true
    })

    mongoose.Promise = global.Promise
    global.db = mongoose;

    db.connection.on("error", function (error) {
        console.log("数据库连接失败：" + error);
    });
    db.connection.on("open", function () {
        console.log("数据库连接成功");
    })

}

export default mongooseStartFun