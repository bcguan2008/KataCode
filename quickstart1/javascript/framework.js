/**
 * let's complete this framework
 */

var merge = function(obj,args){
    for(var i in args){
        obj[i] = args[i];
    }
}

var Class = function(args){
    
    var CONSTRUCTORKEY = "initialize";

    var returnVal = function(){
        if(typeof args[CONSTRUCTORKEY] ==='function'){
            return args[CONSTRUCTORKEY].apply(this,arguments);
        }
    };

    /**
     * 提取merge方法
     */
    merge(returnVal.prototype,args);

    returnVal.extend = function(childArgs){
        var templateFun =function(){
        };
        templateFun.prototype = this.prototype ;
        var child = function(){
        };
        
        child.prototype.constructor = child;
        
        merge(child.prototype,childArgs);

        return child;
    }

    return returnVal;
}
module.exports = Class;