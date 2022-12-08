const fs = require('fs');
const path = require('path');

let result;

// Part 1

try {
  const data = fs.readFileSync(path.resolve(__dirname + '/../day1-input.txt'), 'utf8');
  const array = data.split(/\r\n\r\n/).map(elem => {
    return elem
    .split(/\r\n/)
    .reduce((acc,c) => acc + +c, 0);
  })
  .sort((a,b) => b-a);
  result = array;
  console.log(array[0]);

} catch(e) {
  console.error(e.stack);
}

// Part 2 

console.log(result[0] + result[1] + result[2]);