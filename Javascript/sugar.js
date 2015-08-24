/*
Number.prototype.after_sec = function(callBack){
	console.log(typeof this.toString());
	setTimeout(callBack,this*1000);
}
var i = 5 ; 

i.after_sec (function(){
	console.log('close');
})

*/




Function.prototype.method = function(){
	var name = arguments[0],
		method = arguments[1];

	this.prototype[name]=method;
	return this;
}

function Person (name){
	this.name = name;
}

Person
.method('show',function(){})
.method('sayHello',function(){
	return "hello,"+this.name;
});

var jobs = new Person('jobs');
console.log('hello,jobs' == jobs.sayHello());


