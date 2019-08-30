// commonjs module system

const nameFn = require('./lib');
const obj1 = require('./obj');
const calculator = require('./calculator');


nameFn();

console.log(obj1.value);
console.log(obj1.userIds);
obj1.action();

console.log(calculator.add(2, 67));
console.log(calculator.sub(23, 78));





// esm module system
// this is called as destructuring
const {value, userIds, action} = require('./obj');
action();