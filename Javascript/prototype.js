/*================*/
var Person = function(name ){
	this.name = name ;
}

Person.prototype.sayHello = function(){
	console.log(this.name);
}

var jobs = new Person('jobs');

/*
var jobs = {};
jobs.__proto__ = Person.prototype;
Person.call(jobs,'jobs');
*/

jobs.sayHello();
/*================*/
/*只有函数对象有prototyep*/
/*console.log(Person.prototype.constructor === Person);
*/
/*================*/

/*
var o1={
	method1:function(){}
}

var o2 = {
	method2:function(){}
};

o2.__proto__ = o1;
console.log(typeof o2.method2 === 'function');
console.log(typeof o2.method2 === 'function');

console.log(o1.__proto__);

var o  = function(){};
*/
/*================*/

