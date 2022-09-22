const path = require('path');
const fs = require('fs');

const htmlparser2 = require("htmlparser2");
const css = require('css');

const myParseCss = (styleText) => {
  const ast = css.parse(styleText);
  return ast;
}

const myParseHtml = (html) => {
  const stack = [{
    type: 'document',
    children: []
  }]
  const parser = new htmlparser2.Parser({
    onopentag (name, attributes) {
      const parent = stack[stack.length - 1];
      const template = {
        type: 'element',
        attributes,
        children: []
      }
      stack.push(template);
      parent.children.push(template);
      // console.log(name, attributes);
    },
    ontext (text) {
      const parent = stack[stack.length - 1];
      const textNode = {
        type: 'text',
        text
      }
      parent.children.push(textNode);
      // console.log("-->", text);
    },
    onclosetag (tagname) {
      let parent = stack[stack.length - 1];
      if (tagname === 'style') {
        const cssAst = myParseCss(parent.children[0].text);
        console.dir(cssAst, { depth: null });
      }
      stack.pop();
    },
  });

  parser.end(html);
  // console.log('-------------------------------------')
  console.dir(stack, { depth: null })
}

const data = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
const arr = myParseHtml(data)
