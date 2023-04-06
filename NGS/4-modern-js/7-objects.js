const mystery = "answer";
const PI = Math.PI;

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => { },
  [mystery]: 42,
  PI,
};

console.log(obj.mystery);
console.log(obj.answer);
console.log(obj.PI);