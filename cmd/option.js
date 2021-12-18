const { program } = require('commander');
program.version('0.0.1');

program
  .option('-d, --debug', 'output extra debugging') // basic
  .option('-p, --pizzaType <type>', 'flavor of pizza') // string type
  .option('-dv, --defaultValue <type>', 'default value', 'dao') // default value
  .option('-s, --sauce', 'boolean type', false) // boolean type
  .option('-l, --list <items>', 'list type', (value) => value.split('')) // custom type
  .option('-a, --array <items...>', 'array rest type') // rest type
  .option('-a2, --array2 [items...]', 'array2 rest type') // rest type
  .requiredOption('-r, password <type>', 'required type') // required type
// program.opts() 
// {
//   version: '0.0.1',
//   debug: undefined,
//   small: undefined,
//   pizzaType: undefinded,
//   sauce: false,
//   ..... 
// }
program.parse(process.argv) // 处理参数
console.log(program.opts())
// SHELL
// node option.js -d
program.debug // true
// node option.js -p italy
program.pizzaType // italy
// node option.js -dv
program.defaultValue // dao
// node option.js -l daolang
program.list // ['d', 'a', 'o', 'l', 'a', 'n', 'g']
// node option.js -a 1 2 3 or node option.js -a2 1 2 3
program.array // ['1', '2', '3']
// node option.js // error
// node option.js -r a
program.password // s