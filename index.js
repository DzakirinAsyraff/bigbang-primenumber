"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import file system module
var fs = require("fs");
//initialize an empty array
var arr = [];
//loop through 1 to 100
for (var i = 1; i <= 100; i++) {
    // if i is divisible by 3 and 5, push 'BIGBANG' to arr
    if (i % 3 === 0 && i % 5 === 0) {
        arr.push('BIGBANG');
    }
    // if i is divisible by 3, push 'BIG' to arr
    else if (i % 3 === 0) {
        arr.push('BIG');
    }
    // if i is divisible by 5, push 'BANG' to arr
    else if (i % 5 === 0) {
        arr.push('BANG');
    }
    // else push i to arr
    else {
        arr.push(i.toString());
    }
}
// write arr to file 'output.json'
fs.writeFile('output.json', JSON.stringify(arr), function (err) {
    if (err)
        throw err;
});
