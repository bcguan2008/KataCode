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
        
        var child = function(){
        };

        /**
         * 继承父类的方法，并不污染父类＋不执行父类构造函数
         */
        var templateFun =function(){};
        templateFun.prototype = this.prototype ;
        child.prototype = new templateFun();
        child.prototype.constructor = child;
        
        /**
         * 自己extend的属性，也merge进去
         */
        merge(child.prototype,childArgs);

        return child;
    }

    return returnVal;
}
module.exports = Class;