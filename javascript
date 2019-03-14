1.在一个函数中传入参数，如果参数是对象，那么在函数执行中，对该参数（传入的对象）的某个属性重新赋值，那么就会导致这个对象发生变化，因为此时是引用传递，比如
var obj = {
    value: 1
};
function foo(o) {
    o.value = 2;
    console.log(o.value); //2
}
foo(obj);
console.log(obj.value) // 2

2.而如果直接给参数（对象）赋值，那么不会改变原对象的值，比如，
var obj = {
    value: 1
};
function foo(o) {
    o = 2;
    console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1
所以，传参如果是对象的话，一定要小心会改变原对象的值

这就要讲到其实还有第三种传递方式，叫按共享传递。

而共享传递是指，在传递对象的时候，传递对象的引用的副本。

**注意： 按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本！**

最后，你可以这样理解：

参数如果是基本类型是按值传递，如果是引用类型按共享传递。

3.如果一个函数执行后是一个闭包的话，那么这个函数生成的每个闭包都是独立的，改变任何一个闭包里的变量值，对于其他闭包而言，都不会起作用。

4.https://necolas.github.io/normalize.css/latest/normalize.css

5.fetch

6.async await

7.event loop

8.nginx

9.Fetch 也很适合做现在流行的同构应用，有人基于 Fetch 的语法，在 Node 端基于 http 库实现了node-fetch，又有人封装了用于同构应用的 isomorphic-fetch。
注：同构(isomorphic/universal)就是使前后端运行同一套代码的意思，后端一般是指 NodeJS 环境。

10.学会使用Object.create()和Object.assign()

继承的时候
（1）先在子类函数中用父类函数.call(this);
（2）然后子类函数.prototype = Object.create(父类函数.prototype);
（3）最后再用子类函数.prototype.constructor = 子类函数 一共三步。

如果其中是子类函数继承多个父类函数的话，在完成第二步后，还需要：
Object.assign(子类函数.prototype,其他父类函数.prototype);
这一步是把其他父类函数的原型上的方法，copy到子类函数的原型上，这样实例化子类函数的时候，实例化出来的对象，就具备了所有父类函数原型上的方法

11.Object.keys()

12.[[Prototype]]就是指__proto__,这是某对象的隐式原型，相当于实例化出来的对象的构造函数的原型对象。
比如： 构造函数是Person，那么实例化的person = new Person(); person的__proto__就是Person.prototype。
ES6中推荐使用 Object.getPrototypeOf()方法来返回一个对象的 [[Prototype]]，使用 Object.setPrototypeOf() 方法来设置一个对象的 [[Prototype]]。

13.
(1)function Foo() 、 function Object() 的 __proto__属性都指向了 Function.prototype，这说明函数都是通过 Function构造函数 new 出来的 ；
(2)function Function() 是个例外，虽然它的 __proto__ 也指向了Function.prototype，但是是引擎先内建了 Function.prototype， 然后才有 function Function()，所以并不是自己创建自己；
(3)Function.prototype 的 __proto__ 指向了 Object.prototype，是因为引擎先创建 Object.prototype，再创建 Function.prototype，并将两者用 __proto__ 联系起来。

（1）Object.prototype 和 Function.prototype 是两个特殊对象，由引擎创建，所以不用纠结这俩对象怎么来的了；
（2）对象都能通过 __proto__ 属性找到 Object.prototype，Object.create(null) 创造出的对象例外，因为没有 __proto__ 属性;
（3）函数都能通过 __proto__ 属性找到 Function.prototype;
（4）对象都是函数 new 出来的，除了上面两个特殊对象；
（5）函数的 prototype 是对象，它有个 constructor 属性指向构造函数本身；
（6）对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链。
