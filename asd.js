// function Counter() {
//   this._count = 0;
// }
// Counter.prototype.counter = function () {
//   return (this._count += 1);
// };

// let counter1 = new Counter();
// let counter2 = new Counter();

// console.log(counter1.counter());
// console.log(counter2.counter());
// console.log(counter1.counter());
// console.log(counter1._count);

// let getClosure = (function () {
//   var _count = 0;
//   return function () {
//     return (_count += 1);
//   };
// })();
// console.log(getClosure._count); //undefined
// console.log(getClosure()); // 1
// console.log(getClosure()); // 2

// function CounterFactory() {
//   var _count = 0;
//   return function () {
//     _count += 1;
//     return _count;
//   };
// }
// let counter1 = CounterFactory();
// let counter2 = CounterFactory();
// console.log(counter1()); //1
// console.log(counter1()); //2
// console.log(counter2()); //1
// function counterFactory2() {
//   var _count = 0;

//   function count(value) {
//     _count = value || _count;

//     return _count;
//   }

//   return {
//     count: count,
//     inc: function () {
//       return count(count() + 1);
//     },
//     dec: function () {
//       return count(count() - 1);
//     },
//   };
// }

// var counter = counterFactory2();
// // 초기값
// counter.count(3);

// console.log(counter.inc());
// console.log(counter.inc());
// console.log(counter.dec());
function CounterFactory() {
  var _count = 0;
  return function () {
    _count += 1;
    return _count;
  };
}
let counter1 = CounterFactory();
let counter2 = CounterFactory();
console.log(counter1._count); //undefined
