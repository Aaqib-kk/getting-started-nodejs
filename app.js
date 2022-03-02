const _ = require('lodash')

const items = [1,[2,[3,[4]]]]       //flat and deep method
const newItems = _.flattenDeep(items);
console.log(newItems)