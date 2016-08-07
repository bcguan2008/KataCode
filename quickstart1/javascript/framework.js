/**
 * let's complete this framework
 */

var merge = function(obj,args){
    for(var i in args){
        obj[i] = args[i];
    }
    return obj;
}


var myClass = function(args){
    
    var returnFun = function(){
        if(args['initialize']){
            args['initialize'].apply(this,arguments);
        }    
    };
    //returnFun.prototype = args;
    merge(returnFun.prototype,args);

    returnFun.extend = function (argsChild){
        var child = function(){};
        
        var tempFun = function (){};
        tempFun.prototype = this.prototype;
        child.prototype = new tempFun();
        child.prototype.constructor = child;
        merge(child.prototype,argsChild);

        return child;
    }

    return returnFun;
}
module.exports = myClass;