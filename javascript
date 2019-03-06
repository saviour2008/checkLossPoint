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
