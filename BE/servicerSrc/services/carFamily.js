import { get } from '../utils/request'
const request = require("request");
export function getCarList() {
  const options = {
    uri: "https://www.autohome.com.cn/includefile/index201404/market/110100.js",
    // 必要
    encoding: null,
  };
  return get(options);

  // return new Promise((resolve, reject) => {
  //   request(options, (err, response, body) => {
  //     if (!err && response.statusCode === 200) {
  //       // 由于接口中文是 gb2312编码，所以要转换
  //       const res = Iconv.decode(body, "gb2312").toString();
  //       return resolve(res);
  //     } else {
  //       return reject(err);
  //     }
  //   });
  // });
}
