// 输出结果
// 1.异步&事件循环
Promise.resolve().then(() => {
  console.log('1'); // 
  throw 'Error';
}).then(() => {
  console.log('2');
}).catch(() => {
  console.log('3'); // 
  throw 'Error';
}).then(() => {
  console.log('4');
}).catch(() => {
  console.log('5'); // 
}).then(() => {
  console.log('6'); // 
});












// 2.this 指向
// function foo() {
//   console.log(this.a);
// }
// function doFoo() {
//   foo();
// }
// var obj = {
//   a: 1,
//   doFoo: doFoo
// };
// var a = 2;
// obj.doFoo() // 2

// var a = 10
// var obj = {
//   a: 20,
//   say: () => {
//     console.log(this.a)
//   }
// }
// obj.say() // 10
// var anotherObj = { a: 30 }
// obj.say.apply(anotherObj) // 10

// function a() {
//   console.log(this); // window
// }
// a.call(null);

// 根据ECMAScript262规范规定：如果第一个参数传入的对象调用者是null或者undefined，call方法将把全局对象（浏览器上是window对象）作为this的值。所以，不管传入null 还是 undefined，其this都是全局对象window。所以，在浏览器上答案是输出 window 对象。
// 要注意的是，在严格模式中，null 就是 null，undefined 就是 undefined

// "use strict"
// function a() {
//   console.log(this); // null
// }
// a.call(null);

// var obj = {
//   name: 'cuggz',
//   fun: function () {
//     console.log(this.name);
//   }
// }
// obj.fun() // cuggz
// new obj.fun() // undefined
// 4



















// 3.作用域&变量提升&闭包

// (function () {
//   var x = y = 1;
// })();
// var z;
// console.log(y); // 1
// console.log(z); // undefined
// console.log(x); // x 未定义

// var a, b
// (function () {
//   console.log(a); // undefined
//   console.log(b); // undefined
//   var a = (b = 3);
//   console.log(a); // 3
//   console.log(b); // 3
// })()
// console.log(a); // undefined
// console.log(b); // 3

// var friendName = 'World';
// (function () {
//   if (typeof friendName === 'undefined') {
//     var friendName = 'Jack';
//     console.log('Goodbye ' + friendName);
//   } else {
//     console.log('Hello ' + friendName);
//   }
// })(); // Goodbye Jack

// function fn1() {
//   console.log('fn1')
// }
// var fn2
// fn1() // fn1
// fn2() // fn2 is node a function
// fn2 = function () {
//   console.log('fn2')
// }
// fn2() // 

// function a() {
//   var temp = 10;
//   function b() {
//     console.log(temp); // 10
//   }
//   b();
// }
// a();
// function a() {
//   var temp = 10;
//   // console.log('gogo');
//   b();
// }
// function b() {
//   console.log(temp); // 报错 Uncaught ReferenceError: temp is not defined
// }
// a();

// var a = 3;
// function c() {
//   alert(a);
// }
// (function () {
//   var a = 4;
//   (function () {
//     var a = 5;
//     c();
//   })()
// })();
// js中变量的作用域链与定义时的环境有关，与执行时无关。执行环境只会改变this、传递的参数、全局变量等

// function fun(n, o) {
//   console.log(o)
//   return {
//     fun: function (m) {
//       return fun(m, n);
//     }
//   };
// }
// var a = fun(0); a.fun(1); a.fun(2); a.fun(3); // undefined 0 0 0
// var b = fun(0).fun(1).fun(2).fun(3); // undefined 0 1 2
// var c = fun(0).fun(1); c.fun(2); c.fun(3); // undefined 0 1 1

// // n: 0 o:undefined
// // m: 1 n: 0
// // n: 2 o: 0
// // m: 3 o: 0

// // n: 0 o: undefined
// // m: 1 n: 0

// f = function () { return true; };
// g = function () { return false; };
// (function () {
//   // console.log(g);
//   function g() { return true; }
//   if (g() && [] == ![]) {
//     console.log('daole')
//     f = function f() { return false; };
//   }
// })();
// console.log(f());

// console.log('a1---------', a1);
// if (true) {
//   function a1() {

//   }
// }
// console.log('a1++++++++++', a1);
// // 为什么有了块 第一个a1是undefined


// console.log('a1---------', a1);
// function a1() {

// }
// console.log('a1++++++++++', a1);
// // 而这样的话a1就是function

// function bs() {
//   console.log(1);
// }
// function fn() {
//   bs();
//   if (false) {
//     function bs() {
//       console.log(2)
//     }
//   }
// }
// fn();

// function bs(){
//   console.log(1)
// }
// function fn(){
//   console.log(bs)
// }
// fn()




















// 4.原型&继承

// function Person(name) {
//   this.name = name
// }
// var p2 = new Person('king');
// console.log(p2.__proto__) //Person.prototype
// console.log(p2.__proto__.__proto__) //Object.prototype
// console.log(p2.__proto__.__proto__.__proto__) // null
// // console.log(p2.__proto__.__proto__.__proto__.__proto__)//null后面没有了，报错
// // console.log(p2.__proto__.__proto__.__proto__.__proto__.__proto__)//null后面没有了，报错
// console.log(p2.constructor)//Person
// console.log(p2.prototype)//undefined p2是实例，没有prototype属性
// console.log(Person.constructor)//Function 一个空函数
// console.log(Person.prototype)//打印出Person.prototype这个对象里所有的方法和属性
// console.log(Person.prototype.constructor)//Person
// console.log(Person.prototype.__proto__)// Object.prototype
// console.log(Person.__proto__) //Function.prototype
// console.log(Function.prototype.__proto__)//Object.prototype
// console.log(Function.__proto__)//Function.prototype
// console.log(Object.__proto__)//Function.prototype
// console.log(Object.prototype.__proto__)//null

// function Foo() {
//   getName = function () {
//     console.log(1);
//   }
//   return this;
// }
// Foo.getName = function () {
//   console.log(2);
// }
// Foo.prototype.getName = function () {
//   console.log(3);
// }
// var getName = function () {
//   console.log(4);
// }
// function getName() {
//   console.log(5);
// }

// Foo.getName();
// getName();
// Foo().getName();
// getName();

// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();
// // 2 4 1 1 2 3 3

// var F = function () { };
// Object.prototype.a = function () {
//   console.log('a');
// };
// Function.prototype.b = function () {
//   console.log('b');
// }
// var f = new F();
// f.a(); // a
// f.b(); // baocuo
// F.a(); // a
// F.b(); // b


// function Foo() {
//   Foo.a = function () {
//     console.log(1);
//   }
//   this.a = function () {
//     console.log(2)
//   }
// }
// Foo.prototype.a = function () {
//   console.log(3);
// }
// Foo.a = function () {
//   console.log(4);
// }
// Foo.a(); // 4
// let obj = new Foo();
// obj.a(); // 2
// Foo.a(); // 1

// 4.