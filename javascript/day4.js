const fs = require('fs');
const path = require('path');

try {
  const input = fs.readFileSync(path.resolve(__dirname + '/../day4-input.txt'), 'utf8');
  let fullOverlapCount = 0;
  let overLapCount = 0;

  const array = input.split(/\r\n/)
  .map(group => {
    return group.split(',')
    .map(partner => partner.split('-')
    .map(elem => Number(elem)))
  });

  
  array.forEach(pair => {
    const lesserL = pair[0][0];
    const greaterL = pair[0][1];
    const lesserR = pair[1][0];
    const greaterR = pair[1][1];

    if (lesserL <= lesserR && greaterL >= greaterR || lesserL >= lesserR && greaterL <= greaterR) {
      fullOverlapCount++;
    }
    if (lesserL <= lesserR && greaterL >= lesserR || lesserL <= greaterR && greaterL >= greaterR 
      || lesserR <= lesserL && greaterR >= lesserL || lesserR <= greaterL && greaterR >= greaterL) {
      overLapCount++;
    }

  })

  console.log(fullOverlapCount, overLapCount);

} catch (error) {
  console.error(error);
}