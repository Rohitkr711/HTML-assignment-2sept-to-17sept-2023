function factorial(number) {
  if (number < 0) {
    return undefined;
  }
  if (number == 0) {
    return 1;
  }
  let result;
  result = number * factorial(number - 1);
  return result;
}
console.log('Factorial =',factorial(5));
