// 手写代码

// Object.create

// const obj = {
//   a: 1,
// };
// console.log(obj);

// const obj1 = new Object({
//   a: 1
// });
// console.log(obj1);

// function A() {
//   this.a = 1;
//   this.b = 2;
// }

// const aa = new A();
// console.log(aa);

// const obj1 = { a: 123 };
// const obj2 = Object.create(obj1);

// function MyCreate(obj) {
//   const newObj = {};
//   newObj.__proto__ = obj;
//   return newObj;
// }

// const obj3 = MyCreate(obj1);

// function myInstanceof(obj, Obj) {
//   let proto = obj.__proto__;
//   const prototype = Obj.prototype;
//   while (true) {
//     if (!proto) {
//       return false;
//     }
//     if (proto === prototype) {
//       return true;
//     }
//     proto = proto.__proto__;
//   }
// }

// const arr = [];
// console.log(myInstanceof(arr, Object));
// console.log(myInstanceof(arr, String));
// console.log(myInstanceof(arr, Array));


// function MyNew(Fn, ...rest) {
//   const obj = {};
//   obj.__proto__ = Fn.prototype;
//   const res = Fn.call(obj, ...rest);
//   return typeof res === 'object' ? res : obj;
// }
// function A(name){
//   this.a = 1;
//   this.b = 2;
//   this.name = name;
// }
// const obj = MyNew(A, 'a');

// function MyNew() {
//   const Fn = Array.prototype.shift.call(arguments);
//   if (typeof Fn !== 'function') {
//     console.error('type error');
//     return;
//   }
//   const result = Object.create(Fn.prototype);
//   const newResult = Fn.apply(result, arguments);
//   if (newResult && (typeof newResult === 'object' || typeof newResult === 'function') ) {
//     newResult;
//   } else {
//     return result;
//   }
// }
// function A(name){
//   this.a = 1;
//   this.b = 2;
//   this.name = name;
// }
// const obj = MyNew(A, 'a');



// const arr = [1, 2, 3, 4, 5].map(item => {
//   return {
//     name: item
//   }
// })

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   const r = Math.floor(Math.random() * arr.length);
//   let tem = arr[i];
//   arr[i] = arr[r];
//   arr[r] = tem;
// }
// console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length)
for (var i = 0; i < arr.length; i++) {
  const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
  console.log(Math.random() * (arr.length - 1 - i))
  console.log(Math.round(Math.random() * (arr.length - 1 - i)) )
  // [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
}
// console.log(arr)