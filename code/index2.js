// 输出结果
// 1.异步&事件循环
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });
// console.log(4);

// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1')
//   resolve('resolve1')
// })
// const promise2 = promise1.then(res => {
//   console.log(res)
// })
// console.log('1', promise1);
// console.log('2', promise2);
// // promise1 （1 promise对象） (2 promise对象) resolve1

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);
// // 1 2 4 timerStart timerEnd success

// Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });
// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)
// console.log('start');
// // start promise1 timer1 promise2 timer2

// const promise = new Promise((resolve, reject) => {
//   resolve('success1');
//   reject('error');
//   resolve('success2');
// });
// promise.then((res) => {
//   console.log('then:', res);
// }).catch((err) => {
//   console.log('catch:', err);
// })
// // then success1

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)
// 1

// Promise.resolve(1)
//   .then(2)
//   .then(console.log)
//   .then(console.log)

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// const promise2 = promise1.then(() => {
//   throw new Error('error!!!')
// })
// console.log('promise1', promise1)
// console.log('promise2', promise2)
// setTimeout(() => {
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
// }, 2000)
// // (promise1 pendding) (promise2 pendding) (promise1 resolved) (promise2 reject) 

// Promise.resolve(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });
// // 1 2

// Promise.resolve().then(() => {
//   return new Error('error!!!')
// }).then(res => {
//   console.log("then: ", res)
// }).catch(err => {
//   console.log("catch: ", err)
// })
// // then error

// const promise = Promise.resolve().then(() => {
//   return promise;
// })
// promise.catch(console.err)
// // promise本身不能返回本身

// Promise.resolve().then(() => {
//   console.log('1'); // 
//   throw 'Error';
// }).then(() => {
//   console.log('2');
// }).catch(() => {
//   console.log('3'); // 
//   throw 'Error';
// }).then(() => {
//   console.log('4');
// }).catch(() => {
//   console.log('5'); // 
// }).then(() => {
//   console.log('6'); // 
// });


















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

// var obj = {
//   say: function () {
//     var f1 = () => {
//       console.log("1111", this);
//     }
//     f1();
//   },
//   pro: {
//     getPro: () => {
//       console.log(this);
//     }
//   }
// }
// var o = obj.say;
// o();
// obj.say();
// obj.pro.getPro();

// // （111 window） (111 obj) (window)

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log(this.foo);
//     console.log(self.foo);
//     (function () {
//       console.log(this.foo);
//       console.log(self.foo);
//     }());
//   }
// };
// myObject.func();
// // bar bar undefined bar

// window.number = 2;
// var obj = {
//   number: 3,
//   db1: (function () {
//     console.log(this);
//     this.number *= 4;
//     return function () {
//       console.log(this);
//       this.number *= 5;
//     }
//   })()
// }
// var db1 = obj.db1;
// db1();
// obj.db1();
// console.log(obj.number);
// console.log(window.number);

// // window.number = 40 obj.number = 15
// // window window obj 15 40

// var length = 10;
// function fn() {
//   console.log(this.length);
// }
// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   }
// };
// obj.method(fn, 1);
// // 10 2

// var x = 3;
// var y = 4;
// var obj = {
//   x: 1,
//   y: 6,
//   getX: function () {
//     var x = 5;
//     return function () {
//       return this.x;
//     }();
//   },
//   getY: function () {
//     var y = 7;
//     return this.y;
//   }
// }
// console.log(obj.getX())
// console.log(obj.getY())
// // 3 6

// // call 参数传null、undefined的话就会指向window
// var a = 10;
// var obt = {
//   a: 20,
//   fn: function () {
//     var a = 30;
//     console.log(this);
//     console.log(this.a)
//   }
// }
// obt.fn();
// obt.fn.call();
// (obt.fn)();
// // 20 10 20

// function a(xx){
//   this.x = xx;
//   return this
// };
// var x = a(5);
// var y = a(6);

// console.log(x.x)  // undefined
// console.log(y.x)  // 6

// function foo(something) {
//   this.a = something
// }

// var obj1 = {
//   foo: foo
// }

// var obj2 = {}

// obj1.foo(2);
// console.log(obj1.a);

// obj1.foo.call(obj2, 3);
// console.log(obj2.a);

// var bar = new obj1.foo(4)
// console.log(obj1.a);
// console.log(bar.a);
// // obj1 上 a = 2  obj2 上 a = 3
// // 2 3 2 4

// function foo(something) {
//   this.a = something
// }

// var obj1 = {}

// var bar = foo.bind(obj1);
// bar(2);
// console.log(obj1.a);

// var baz = new bar(3);
// console.log(obj1.a);
// console.log(baz.a);
// // obj1 a = 2
// // 2 2 3




































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

// function Dog() {
//   this.name = 'puppy'
// }
// Dog.prototype.bark = () => {
//   console.log('woof!woof!')
// }
// const dog = new Dog()
// console.log(Dog.prototype.constructor === Dog && dog.constructor === Dog && dog instanceof Dog)

// var A = { n: 4399 };
// var B = function () { this.n = 9999 };
// var C = function () { var n = 8888 };
// B.prototype = A;
// C.prototype = A;
// var b = new B();
// var c = new C();
// A.n++
// console.log(b.n);
// console.log(c.n);

// function A() {
// }
// function B(a) {
//   this.a = a;
// }
// function C(a) {
//   if (a) {
//     this.a = a;
//   }
// }
// A.prototype.a = 1;
// B.prototype.a = 1;
// C.prototype.a = 1;

// console.log(new A().a);
// console.log(new B().a);
// console.log(new C(2).a);


// function Parent() {
//   this.a = 1;
//   this.b = [1, 2, this.a];
//   this.c = { demo: 5 };
//   this.show = function () {
//     console.log(this.a, this.b, this.c.demo);
//   }
// }

// function Child() {
//   this.a = 2;
//   this.change = function () {
//     this.b.push(this.a);
//     this.a = this.b.length;
//     this.c.demo = this.a++;
//   }
// }

// Child.prototype = new Parent();
// var parent = new Parent();
// var child1 = new Child();
// var child2 = new Child();
// child1.a = 11;
// child2.a = 12;
// parent.show();
// child1.show();
// child2.show();
// child1.change();
// child2.change();
// parent.show();
// child1.show();
// child2.show();

// /**
//  * 
//  * parent
//  * a: 1
//  * b: [1, 2, this.a],
//  * c: {demo: 5}
//  * show: ()
//  * 
//  * 
//  * child parent
//  * a: 1
//  * b: [1, 2, 1, 11, 12],
//  * c: {demo: 5}
//  * show: ()
//  * 
//  * child1
//  * a: 5,
//  * change: ()
//  * 
//  * child2
//  * a: 6
//  * change: ()
//  * 
//  * 
//  */

// /**
//  * 1, [1, 2, 1] 5
//  * 11, [1, 2, 1] 5
//  * 12, [1, 2, 1] 5
//  * 1, [1, 2, 1] 5
//  * 5, [1, 2, 1, 11, 12] 5
//  */


// function SuperType() {
//   this.property = true;
// }

// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };

// function SubType() {
//   this.subproperty = false;
// }

// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//   return this.subproperty;
// };

// var instance = new SubType();
// console.log(instance.getSuperValue());

// /**
//  * instance
//  * 
//  * subproperty = false
//  * 
//  * __proto__ = {
//  *  property = true
//  *  getSubValue: function () return this.subproperty
//  *  __proto__ = {
//  *    getSuperValue: function () return this.property;
//  *  }
//  * }
//  */

// /**
//  * true
//  */