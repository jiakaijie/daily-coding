// const fd = function (cb, time) {
//   let timer = null;
//   return function (e) {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       cb.call(this, e);
//     }, time)
//   }
// }

// const jl = function (cb, time) {
//   let startDate = Date.now();

//   return function (e) {
//     let endDate = Date.now();

//     if (endDate - startDate > time) {
//       startDate = Date.now();
//       cb.call(this, e);
//     }
//   }
// }



// const dc = (data) => {
//   let newData = null;

//   const datatype = Object.prototype.toString.call(data);
//   const typeConfig = {
//     arr: '[object Array]',
//     obj: '[object Object]'
//   }

//   if (datatype !== typeConfig.arr && datatype !== typeConfig.obj) {
//     return data;
//   }

//   newData = datatype === typeConfig.arr ? [] : {};

//   Object.keys(data).forEach(key => {
//     if (data.hasOwnPeroperty(key)) {
//       newData[key] = data[key];
//     }
//   })

//   return newData;
// }


// Function.prototype.MyCall = function (obj, ...rest) {
//   const fn = Symbol();
//   obj[fn] = this;

//   const res = obj[fn](...rest);
//   delete res;
//   return res;
// }

// Function.prototype.myBind = function (obj, arr) {
//   const fn = Symbol();

//   obj[fn] = this;

//   const res = obj[fn](...arr);
//   delete obj[fn];
//   return res;
// }

// Function.prototype.MyBind = function (obj, ...rest) {
//   return (...rest1) => {
//     const fn = Symbol();
//     obj[fn] = this;

//     const res = obj[fn](...rest, ...rest1);
//     delete obj[fn];
//     return res;
//   }
// }



// function MyInstanceOf(data, Fn) {
//   if (data === null || Fn === null) {
//     return false;
//   }
//   data = data.__proto__;

//   while (true) {
//     if (data === null) {
//       return false;
//     }
//     if (data === Fn.prototype) {
//       return true;
//     }

//     data = data.__proto__;
//   }
// }

// function MyNew(NewFn, ...rest) {
//   const obj = {};

//   obj.__proto__ === NewFn.prototype;

//   const res = NewFn.call(obj, ...rest);

//   return (typeof res === 'function' || typeof res === 'object') ?
//     res : obj;
// }


// function Parent(age) {
//   this.name = 'a';
//   this.age = age;
// }

// Parent.prototype.abc = function () {
//   console.log(123);
// }

// Child.prototype = Object.create(Parent);

// Child.prototype.bcd = function () {
//   console.log(this.name);
// }

// function Child(name, age) {
//   Pranet.call(this, age);

//   this.name = name;
// }

// const ccccc = new Child('ahah', 123);


// const myCurry = (fn, len, args) => {
//   return function (...rest) {
//     const nowRest = [...args, ...rest];

//     if (nowRest.len >= len) {
//       fn.call(this, ...nowRest);
//     } else {
//       return myCurry(fn, len, ...nowRest)
//     }
//   }
// }

// const curry = function (cb, len = cb.length) {
//   return myCurry(cb, len);
// }

