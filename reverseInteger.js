var reverseInteger = (x) => {
  let reverseX = parseInt(x.toString().split('').reverse().join(''));
  if (reverseX < Math.pow(2, 31) * -1 || reverseX > Math.pow(2, 31) - 1)
    return 0;
  return reverseX * Math.sign(x);
};
