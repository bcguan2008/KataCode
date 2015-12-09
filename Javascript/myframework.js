var util = {
	merge:function(a,b){
		if(typeof b === 'object'){
			for(var i in b){
				a[i] = b[i];
			}
		}
		return a;
	}
}

var myClass = function (o){

    var parent= function(name){
    	if(typeof this['initialize'] === 'function'){
    		this.initialize.apply(this,arguments);
    	}
    };

    var child = function(){}
    util.merge(parent.prototype,o);

    var extend = function(arg){
    	child = function(){};
		child.prototype = new this();
		util.merge(child.prototype,arg);
		child.extend = extend
		return child;
	}
	
	parent.extend = extend ;

	return parent;
}

module.exports = myClass;