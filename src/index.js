const afterTenEnd = 'ty';
const hundred = 'hundred';
const tenEnd = 'teen';
const textElements = [
  'zero',
  'one',
  { two: 'twen' },
  { three: 'thir' },
  { four: 'for' },
  { five: 'fif' },
  'six',
  'seven',
  { eight: 'eigh' },
  'nine',
  'ten',
  'eleven',
  'twelve',
];

const returnKey = (obj) =>
  typeof obj === `string` ? obj : Object.keys(obj)[0];

const returnVelue = (obj) =>
  typeof obj === `string` ? obj : Object.values(obj);

const tensSelectingFour = (numb) =>
  numb % 10 === 4
    ? returnKey(textElements[numb % 10])
    : returnVelue(textElements[numb % 10]);

const separateAfterTwenty = (numb) =>
  numb / 10 < 2
    ? `${tensSelectingFour(numb)}${tenEnd}`
    : `${returnVelue(textElements[Math.floor(numb / 10)])}${afterTenEnd}`;

const tens = (numb) =>
  [10, 11, 12].includes(numb)
    ? returnKey(textElements[numb])
    : separateAfterTwenty(numb);

let answer = '';

function toReadableInner(numb) {
  switch (numb.toString().length) {
    case 1:
      answer += returnKey(textElements[numb]);
      break;
    case 2:
      answer += `${tens(numb)} ${numb % 10 === 0 || numb / 10 < 2 ? '' : toReadableInner(numb % 10)}`;
      break;
    default:
      answer += `${returnKey(textElements[Math.floor(numb / 100)])} ${hundred} ${numb % 100 === 0 ? '' : toReadableInner(numb % 100)}`;
  }
  return answer.trim();
}

module.exports = function toReadable(number) {
  answer = '';
  return toReadableInner(number);
};
