let str = '1234'.padStart(8,'0');
console.log(str); // "00001234"

let str = 'abc'.padStart(5);
console.log(str); // "  abc"

str = 'abc'.padEnd(5,'*');
console.log(str); // "abc**"

const str1 = '5';

console.log(str1.padStart(2, '0'));//  output: "05"

// -- credit card number example --
const fullNumber = '2034399002125581'; 
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
//  output: "************5581"