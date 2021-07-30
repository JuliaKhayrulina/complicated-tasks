let num = 266219;
let result = String(num)
  .split('')
  .reduce((acc, c) => acc * c);

console.log(result);

result **= 3;
console.log(result);
console.log(String(result).substring(0, 2));
