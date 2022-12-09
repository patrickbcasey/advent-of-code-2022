const fs = require('fs');
const path = require('path');

try {
  const input = fs.readFileSync(path.resolve(__dirname + '/../day3-input.txt'), 'utf8');
  
  // Part 1
  const array = input.split(/\r\n/);
  const commonChars = [];
  
  array.forEach(rucksack => {
    const mid = Math.floor(rucksack.length/2);
    const left = rucksack.slice(0, mid);
    const leftSet = new Set(left);
    const right = rucksack.slice(mid);
    const rightSet = new Set(right);

    if (leftSet.size >= rightSet.size) {
      for (const char of leftSet) {
        if (rightSet.has(char)) {
          commonChars.push(char)
          break;
        }
      }
    } else {
      for (const char of rightSet) {
        if (leftSet.has(char)) {
          commonChars.push(char)
          break;
        }
      }
    }
  })

  const result = commonChars.reduce((acc,c) => {
    return acc + (c.toUpperCase().charCodeAt(0) === c.charCodeAt(0) ? c.charCodeAt(0) - 38 : c.charCodeAt(0) - 96)
  }, 0)
  console.log(result);

  // Part 2
  const badge = [];

  for (let i = 2; i < input.length; i+=3) {
    const ruckOne = new Set(array[i-2]);
    const ruckTwo = new Set(array[i-1]);
    const ruckThree = new Set(array[i]);
    
    if (ruckOne.size >= ruckTwo.size && ruckOne.size >= ruckThree.size) {
      for (const char of ruckOne) {
        if (ruckTwo.has(char) && ruckThree.has(char)) {
          badge.push(char);
          break;
        }
      }

    } else if (ruckTwo.size >= ruckOne.size && ruckTwo.size >= ruckThree.size) {
      for (const char of ruckTwo) {
        if (ruckOne.has(char) && ruckThree.has(char)) {
          badge.push(char);
          break;
        }
      }
    } else {
      for (const char of ruckThree) {
        if (ruckTwo.has(char) && ruckOne.has(char)) {
          badge.push(char);
          break;
        }
      }
    }
  }
  const badgeSum = badge.reduce((acc,c) => acc + (c.toUpperCase().charCodeAt(0) === c.charCodeAt(0) ? c.charCodeAt(0) - 38 : c.charCodeAt(0) - 96), 0);
  console.log(badgeSum)

} catch (error) {
  console.error(error);
}
