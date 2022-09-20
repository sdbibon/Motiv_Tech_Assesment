const JSONStr = '{"a":"somestring", "b":42, "c":false}';
const object1 = JSON.parse(JSONStr);

// get value using key
console.log(object1.a)
// expected output: somestring

//  get all keys 
console.log(Object.keys(object1))
// expected output: [ 'a', 'b', 'c' ]

//  get all keys comma separated 
console.log(Object.keys(object1).join())
// expected output: a,b,c

//  get all values 
console.log(Object.values(object1))
// expected output: [ 'somestring', 42, false ]

//  get all values comma separated 
console.log(Object.values(object1).join())
// expected output: somestring,42,false


