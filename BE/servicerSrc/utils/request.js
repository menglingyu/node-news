import UserAgent from "./UserAgent";

import request from "request";

export function get(
  options = {
    uri: "",
    headers: {}
  }
) {
  // if (Object.prototype.toString.call(options).indexOf('String') > 0 ) {

  //
  var index = Math.floor(Math.random() * UserAgent.length);
  // console.log(UserAgent[index], "==---->UserAgent[index];");
  if (!options.headers) options.headers = {};
  options.headers["User-Agent"] = UserAgent[index];

  return new Promise((resolve, reject) => {
    request(options, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        // 由于接口中文是 gb2312编码，所以要转换
        // const res = Iconv.decode(body, "gb2312").toString();
        return resolve(body);
      } else {
        return reject(err);
      }
    });
  });

  // request(options, (err, response, body) => {
  //     return resolve(res);
  // });
}
