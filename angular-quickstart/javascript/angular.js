var angular = function(){

}
function extractArgs(fn) { 
    //angular 这里还加了注释、箭头函数的处理
    var args = fn.toString().match(/^[^\(]*\(\s*([^\)]*)\)/m);
    return args[1].split(',');
}

var CreateInjector = function(cache){
    this.cache = cache ;
}

CreateInjector.prototype = {
    invoke:function(fn,self){
        var self = this, argsString , args ; 

        argsString = extractArgs(fn);
        args = [];
        argsString.forEach(function(val){
            args.push(self.cache[val]);
        })
        
        return fn.apply(self,args);
    }
}

CreateInjector.constructor = CreateInjector;

angular.module = function(){
    var modules = {};
    var injector = new CreateInjector(modules);

    return {
        injector:injector,
        factory:function(name,fn){
            if(name && fn){
                modules[name] = this.injector.invoke(fn) ;
            }
            return this;
        }
    }
} 

module.exports = angular ;