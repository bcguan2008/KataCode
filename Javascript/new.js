
var  Person= (function (name){
	return  function(name){
		this.name= name;
		this.sayHello = sayHello;
	}

	function sayHello(){
		console.log(this.name);
	}
})();

var jobs = new Person('jobs');

var gates = new Person('gates');

console.log(jobs.sayHello === gates.sayHello);