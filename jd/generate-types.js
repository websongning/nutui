const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = `import Locale from '../packages/locale';\n`;
const packages = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, type } = element;
    importStr += `import ${name} from './__VUE/${name.toLowerCase()}${type === 'methods' ? '' : '/index.vue'}';\n`;

    packages.push(name);
  });
});
let installFunction = `
export { Locale,${packages.join(',')} };`;
let fileStr = importStr + installFunction;
fs.outputFileSync(path.resolve(__dirname, '../dist/types/nutui.d.ts'), fileStr, 'utf8');
fs.outputFileSync(
  path.resolve(__dirname, '../dist/types/index.d.ts'),
  `import * as NutUI from './nutui';
export default NutUI;
export * from './nutui';`,
  'utf8'
);
