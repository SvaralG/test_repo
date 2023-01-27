let a = 10;
let b = 'hello';
let c = true;
console.log(a += 20); // addition
console.log(b += ' world!'); // concatenation
console.log(c += true); // boolean + boolean -> addition

let a = 10;
let b = 'hello';
let c = true;
console.log(a -= 20); // -10
console.log(b -= 'world'); // NaN
console.log(c -= true); // 0