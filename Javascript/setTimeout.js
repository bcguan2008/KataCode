for(var i = 0; i<10;i++){

	/*setTimeout(function(){console.log(i)},200)

	var foo = function(){
		var h = i;
	}

	foo();*/

	setTimeout((function(name){
		console.log(name);
	})(i),200*i);

/*
	(function(){
		var h = i;
		setTimeout(function(){
			console.log(h);
		},200*h)
	})()
*/

}



/*
var start = Date.now();
setTimeout(function(){
	var end = Date.now();
	console.log(end-start);
},5000);*/


/*
var a = 5 

function foo(){
	console.log(a);
}
*//*


(function(){
	var a = 5;
	this.foo  = function(){
		console.log(a);
	}
}).call(this);*/