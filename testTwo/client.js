const net = require('net'); // node网络模块

class HTTPRequest {
  constructor(options = {}) {
    const { host, port, path, method, headers } = options;
    this.host = host;
    this.port = port;
    this.path = path;
    this.method = method;
    this.headers = headers;
  }
  async send() {
    return new Promise((resolve, reject) => {
      const rows = [];

      rows.push(`${this.method} / HTTP/1.1`); // 模拟HTTP请求行

      Object.keys(this.headers).forEach(key => {
        rows.push(`${key}: ${this.headers[key]}`);
      })

      const data = rows.join('\r\n') + '\r\n\r\n'; // 模拟HTTP请求头

      console.log(data);

      const socket = net.createConnection({ // socket连接
        host: this.host,
        port: this.port
      }, () => {
        socket.write(data); // socket发送
      })
      socket.on('data', (chunkBuf) => { // 监听数据返回buffer数据流 tcp一段一段的数据块
        // 所以要一段一段处理进行合成
        console.log(chunkBuf.toString());
      })
    })
  }
}

async function request() {
  await new HTTPRequest({
    host: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    headers: {
      name: 'a',
      age: 'b'
    }
  }).send();
}

request();