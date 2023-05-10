// import file system module
import * as fs from 'fs';

//initialize an empty array
let arr: string[] = [];

//loop through 1 to 100
for (let i = 1; i <= 100; i++) {
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
fs.writeFile('output.json', JSON.stringify(arr), (err) => {
    if (err) throw err;
});