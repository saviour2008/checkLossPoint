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

10.学会使用Object.create()（创建新对象以某个构造函数）和Object.assign()（用来做浅拷贝,可以拷贝symbol值和）

继承的时候
（1）先在子类函数中用父类函数.call(this);
（2）然后子类函数.prototype = Object.create(父类函数.prototype);
（3）最后再用子类函数.prototype.constructor = 子类函数 一共三步。

如果其中是子类函数继承多个父类函数的话，在完成第二步后，还需要：
Object.assign(子类函数.prototype,其他父类函数.prototype);
这一步是把其他父类函数的原型上的方法，copy到子类函数的原型上，这样实例化子类函数的时候，实例化出来的对象，就具备了所有父类函数原型上的方法

如果是new一个对象出来，则
链接到原型: obj.__proto__ = Con.prototype
绑定this: apply
返回新对象(如果构造函数有自己 retrun 时，则返回该值)

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

14.用递归进行深拷贝
function copy(obj){
 let newobj = null;   //声明一个变量用来储存拷贝之后的内容

 //判断数据类型是否是复杂类型，如果是则调用自己，再次循环，如果不是，直接赋值即可，
 //由于null不可以循环但类型又是object，所以这个需要对null进行判断
    if(typeof(obj) == 'object' && obj !== null){ 

//声明一个变量用以储存拷贝出来的值,根据参数的具体数据类型声明不同的类型来储存
        newobj = obj instanceof Array? [] : {};   

//循环obj 中的每一项，如果里面还有复杂数据类型，则直接利用递归再次调用copy函数
        for(var i in obj){  
            newobj[i] = copy(obj[i])
        }
    }else{
        newobj = obj
    }    
  return newobj;    //函数必须有返回值，否则结构为undefined
}

15.浅拷贝用Object.assign()或者ES6的扩展运算符;

15.Object类型判断
let class2type = {}
'Array Date RegExp Object Error'.split(' ').forEach(e => class2type[ '[object ' + e + ']' ] = e.toLowerCase()) 

function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === 'object' ? class2type[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
}

16.原型链继承---圣杯模式
P是父级，C是子级
var inherit = (function(c,p){
	var F = function(){};
	return function(c,p){
		F.prototype = p.prototype;
		c.prototype = new F();
		c.uber = p.prototype;
		c.prototype.constructor = c;
	}
})();

17.
es6: import / export
commonjs: require / module.exports / exports---node.js
amd: require / defined
require优点是可以动态，而且是值拷贝，缺点是同步的
import不支持动态，指向内存地址，导入值会随着导出值变化，异步的。

18.函数提升会比变量提升要优先，而且函数声明提升直接会带函数体一起提升，而变量提升只是把变量名提升。

19.栈内存是后进先出，堆内存是先进先出。
栈的运行速度比堆的运行速度快，原因如下。
栈内存放的是基本类型和引用的内存地址，堆内存放的是引用类型（跟引用地址对应的，因为大小未知，所以放在堆内存中，将对象等复杂的结构放在堆内存时，是为了不
影响栈的效率）


https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-19
https://www.jianshu.com/p/f1ed81738ccf
https://www.e-learn.cn/content/wangluowenzhang/59229
