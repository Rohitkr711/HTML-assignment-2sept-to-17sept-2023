function curry(func) {
    return func;
}

const add=curry(function curriedFunc(x) {
  return function (y) {
    return x + y;
  };
});
const addNumber1=add(4);
const addNumber2=addNumber1(3);
console.log("Addition of two no =",addNumber2);
console.log("Sum =",add(3)(9));

