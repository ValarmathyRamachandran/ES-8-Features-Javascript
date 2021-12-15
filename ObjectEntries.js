const ssn = Symbol('ssn');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv = Object.entries(person);

console.log(kv);
// [
//     ['firstName', 'John'],
//     ['lastName', 'Doe'],
//     ['age', 25]
// ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const obj = { honda: 'bike', tata: 'car', motor: 'cycle' };
const objEntries = Object.entries(obj);

console.log(objEntries); // output: [ ['honda', 'bike'], ['tata', 'car'], ['motor', 'cycle'] ]

const obj = { false: 'f', 10: 'right' };
const objEntries = Object.entries(obj);

console.log(objEntries); // output: [ ['10', 'right'], ['false', 'f'] ]