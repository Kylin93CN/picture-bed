const crypto = require('crypto');

// const date = new Date().toUTCString();
// console.log(date);

// const key = 'upyun';
// const secret = 'secret';
// const method = 'GET';
// const uri = '/v1/apps/';

function MD5(value) {
  return crypto
    .createHash('md5')
    .update(value)
    .digest('hex');
}

function hmacsha1(secret, value) {
  return crypto
    .createHmac('sha1', secret)
    .update(value, 'utf8')
    .digest()
    .toString('base64');
}

function sign(key, secret, method, uri, date, policy = null, md5 = null) {
  const elems = [];
  [method, uri, date, policy, md5].forEach(item => {
    if (item != null) {
      elems.push(item);
    }
  });
  const value = elems.join('&');
  const auth = hmacsha1(secret, value);
  return `UPYUN ${key}:${auth}`;
}

export { MD5, sign };

// console.log(MD5('secret'));
// // 上传，处理，内容识别有存储
// console.log(sign(key, MD5(secret), method, uri, date));
// // 内容识别无存储，容器云
// console.log(sign(key, secret, method, uri, date));
