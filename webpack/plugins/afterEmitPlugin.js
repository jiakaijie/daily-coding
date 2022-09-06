const fs = require('fs-extra')
const path = require('path');
const TalOss = require('@xes/tal-oss');

const isFile = (myPath) => {
  return fs.statSync(myPath).isFile();
}

module.exports = class MyPlugin1 {
  constructor() {
    this.bucket = '101-static-test';
    this.accessKeyId = 'xxx';
    this.accessKeySecret = 'xxx1';
  }
  apply(compiler) {
    const outputPath = compiler.options.output.path
    compiler.hooks.afterEmit.tap('MyPlugin1', (compliaction) => {
      // console.log(outputPath);
      // console.log(__dirname);
      console.log('文件路径', path.resolve(__dirname, '../', 'build'));

      this.uploadFiles(path.resolve(__dirname, '../', 'build'));
      // const buildDir = path.resolve(__dirname, '../', 'build');
      // console.log(fs.statSync(`${buildDir}/js`).isFile())
      // console.log(fs.statSync(`${buildDir}/index.html`).isFile())
      // console.log('afterEmit', fs.existsSync(outputPath));
    })
  }
  uploadFiles(myPath) {
    const arr = fs.readdirSync(myPath);
    arr.forEach(item => {
      const filePath = `${myPath}/${item}`;
      if (isFile(filePath)) {
        this.talOssOne({
          filePath: filePath,
          uploadTo: 'myTest0906'
        });
      } else {
        this.uploadFiles(filePath);
      }
    })
  }
  async talOssOne({ filePath, uploadTo }) {
    console.log(filePath);
    if (!fs.existsSync(filePath)) {
      console.log('文件不存在');
      return;
    }
    if (!fs.statSync(filePath).isFile()) {
      console.log('不是文件', filePath);
      return;
    }

    return new Promise((resolve, reject) => {
      new TalOss({
        uploadTo,
        bucket: this.bucket,
        limit: 100,
        accessKeyId: this.accessKeyId,
        accessKeySecret: this.accessKeySecret,
        success() {
          console.log('上传成功');
          resolve();
        },
        fail(err) {
          console.log(
            '================若为测试环境, 请检查是否绑定测试环境hosts: 120.52.32.211 upload.xueersi.com',
          );
          reject(err);
        },
      }).uploadFile(filePath);
    });
  };
}