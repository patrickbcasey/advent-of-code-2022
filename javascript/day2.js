const fs = require('fs');
const path = require('path');

// Part 1
try {
  const data = fs.readFileSync(path.resolve(__dirname + '/../day2-input.txt'), 'utf8');

  const letterMap = {
    'A': 'X',
    'B': 'Y',
    'C': 'Z'
  };
  
  const choiceValue = {
    'X': 1,
    'Y': 2,
    'Z': 3,
  };
  
  const array = data.split(/\r\n/)
  const result = array.reduce((acc, c) => {
    if (letterMap[c[0]] === c[2]) {
      return acc + 3 + choiceValue[c[2]];
    } else if (c[0] === 'A' && c[2] === 'Y' || c[0] === 'B' && c[2] === 'Z' || c[0] === 'C' && c[2] === 'X') {
      return acc + 6 + choiceValue[c[2]];
    } else {
      return acc + choiceValue[c[2]];
    }
  }, 0);

  console.log(result);

  // Part 2

  const map = {

  }
  const adjustedScore = array.reduce((acc,c) => {
    if (c[2] === 'X') {
      switch (c[0]) {
        case 'A':
          return acc + 3;
        case 'B':
          return acc + 1;
        case 'C':
          return acc + 2;
      }
    } else if (c[2] === 'Y') {
      return acc + 3 + choiceValue[letterMap[c[0]]];
    } else {
      switch (c[0]) {
        case 'A':
          return acc + 8;
        case 'B':
          return acc + 9;
        case 'C':
          return acc + 7;
      }
    }
  }, 0);

  console.log(`Total Points: ${adjustedScore}`);

} catch (error) {
  console.error(error);
}