function addDigits(num: number): number {
  const splitNumber = num
    .toString()
    .split("")
    .map((v) => parseInt(v));
  const calculatedNumber = splitNumber.reduce(
    (acc, curVallue) => acc + curVallue
  );

  if (splitNumber.length === 1) return num;

  return addDigits(calculatedNumber);
}

function addDigitsFast(num: number): number {
  if (num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
}

console.log(addDigitsFast(38));
