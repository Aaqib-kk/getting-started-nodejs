// console.log(__dirname)
// console.log(__filename);
// setInterval(() => {
//     console.log("Hello World")
// }, 1000);

// modules
//node uses commonjs lib
//every file in node is module

const data = require('./6-alternative-flavor')
const names = require ('./4-names');
const sayHinames = require('./5-utils');
require(`./7-mind-dernade`)
sayHinames("Aqib KK");
sayHinames(names.Anas);