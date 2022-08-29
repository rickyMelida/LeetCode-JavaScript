const numbers = [4, 4, 2, 2, 8, 3, 3];
let re = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  re = numbers[i] ^ re;
}

console.log(re);
