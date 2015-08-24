module.exports = function (o){

    var returnObj= function(name){
    	if(typeof this['initialize'] === 'function'){
    		this.initialize.apply(this,arguments);
    	}
    };

    if(o){
		for(var name in o){
			returnObj.prototype[name]=o[name];
		}

	}
	returnObj.extend = function(arg){
		var returnChildObj = function(){}

		returnChildObj.prototype = new returnObj();

		for(var method in arg){
			returnChildObj.prototype[method] = arg[method];
		}

		returnChildObj.prototype.__super__ = returnObj.prototype;

		return returnChildObj;

	}

	return returnObj;
}