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

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.length)
// for (var i = 0; i < arr.length; i++) {
//   const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
//   console.log(Math.random() * (arr.length - 1 - i))
//   console.log(Math.round(Math.random() * (arr.length - 1 - i)))
//   // [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
// }
// // console.log(arr)



// [0, 7, 0, 0, 6, 6, 3, 0, 1, 2, 3]
// 0 0  0 0 7 6 3 

// const getNewArr1 = () => {
//   const arr = [0, 7, 0, 0, 6, 6, 3, 0, 1, 2, 3];
//   let myIndex = 0;
//   for (let i = 0; i < arr.length; i ++) {
//     const item = arr[i];
//     if (item === 0) {
//       const tem = item;
//       arr[i] = arr[myIndex];
//       arr[myIndex] = tem;
//       myIndex = i;
//     } else {
//       if (arr[myIndex] === 0) {
//         myIndex = i;
//       }
//     }
//   }
//   return arr;
// }
// const arr1 = getNewArr1();


// const getNewArr = () => {
//   const arr = [0, 7, 0, 0, 6, 6, 3, 0, 1, 2, 3];
//   const firstArr = [];
//   const secondArr = [];

//   for (let i = 0; i < arr.length; i ++) {
//     const item = arr[i];
//     if (item === 0) {
//       firstArr.push(item);
//     } else {
//       secondArr.push(item);
//     }
//   }
//   return firstArr.concat(secondArr);
// }
// const arr = getNewArr()

// var a = [];
// if (a) { console.log(1) }
// else { console.log(2) }




const nums = [-1, 0, 3, 5, 9, 12], target = 9

var search = function (nums, target) {
  let index = -1;
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  const midIndex = Math.floor(nums.length / 2);
  const midVal = nums[midIndex];
  if (midVal === target) {
    return 
  }
  if (midVal > target) {

  } else if (midVal < target) {

  } else {
    
  }
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      index = i;
      break;
    }
  }
  return index;
};

search(nums, target);