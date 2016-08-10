var angular = function(){}


function CreateInjector(cache){
    this.cache = cache ; 
}

function extractArgs(fn) { //angular 这里还加了注释、箭头函数的处理
    var args = fn.toString().match(/^[^\(]*\(\s*([^\)]*)\)/m);
    return args[1].split(',');
}

CreateInjector.prototype = {
    invoke:function(fn,self){
        var args= [], argsString =[] , that = this;
        args = extractArgs(fn);
        args.forEach(function(val){
            if(val){
                argsString.push(that.cache[val]);
            }
        });
        return fn.apply(self,argsString);
    }
}

angular.module = function(){
    var modules = {};
    return {
        injector: new CreateInjector(modules),
        factory:function(name,factoryFn){
            this.injector.cache[name] = this.injector.invoke(factoryFn);
            return this;
        }
    }
}

module.exports = angular ;