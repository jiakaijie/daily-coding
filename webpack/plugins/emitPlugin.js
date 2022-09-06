const fs = require('fs');

module.exports = class MyPlugin {
  constructor() {

  };
  apply(compiler) {
    const outputPath = compiler.options.output.path;
    compiler.hooks.emit.tap('MyPlugin1231', (compliaction) => {
      console.log(outputPath);
      console.log('emit', fs.existsSync(outputPath));
    })
  }
}