function foo (name) {
	this.name = name;
}


var o  = {
	setName:foo
}

var method = o.setName;


foo('jobs');         //window
o.setName('jobs');   //o
method('jobs');      //window
foo.call(o,'jobs');  //o
foo.apply(o,['jobs'])//o

===============
var myCompany = {
	title:'大中华',
	brand:function(){
		console.log(this.title);
	}
}

var proxy = function(){
	myCompany.brand.call(myCompany,'');
}

$('#btn').bind('click',myCompany.brand);
===============

var jobs = {
	name:'jobs',
	sayHello:function(){
		console.log(this.name);
	},
	show:function(){}
}

jobs.sayHello();
$(document).ready(jobs.sayHello);


var gates ={
	name="gates",
	sayHello:function(){
		console.log(this.name);
	},
	show:function(){}
}

===============

function factory (name){
	this.name= name;
	this.sayHello = function(){
		console.log(this.name);
	};
	this.show= function(){}
}


var jobs = {};
factory.call(jobs,'jobs');

var gates = {};
factory.call(gates,'gates');

var jobs = new factory('jobs');

/*内存节省*/

var  Person= (funcion (name){
	this.name= name;
	this.sayHello = function(){
		console.log(this.name);
	};

	function sayHello(){
		console.log(this.name);
	}
})();

var jobs = new Person('jobs');

var gates = new Person('gates');

console.log(jobs.sayHello === gates.sayHello);

===============


