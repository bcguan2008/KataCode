var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

var angular = require('../javascript/angular.js');

describe('Angular 类库',function(){

    describe('Angular 的依赖注入实现',function(){
        var app = angular.module();

        it('angular.module 返回对象，包含factory，injector',function(){
            angular.module.should.be.a('function');
            app.factory.should.be.a('function');
            app.injector.should.be.a('object');
        });

        it('通过factory 注入对象，invoke调用实现',function(){
            app.factory('baseVal',function(){
                return {
                    a:2,
                    b:3
                }
            });

            app.factory('minus',function(){
                return function(a,b){
                    return a-b;
                }
            });
            
            app.factory('plus',function(){
                return function(a,b){
                    return a+b;
                }
            });

            var invoke = false; 
            app.injector.invoke(function(baseVal,minus,plus){
                invoke = true ;
                expect(minus(baseVal.a,baseVal.b)).to.be.equal(-1);
                expect(plus(baseVal.a,baseVal.b)).to.be.equal(5);
            })
            invoke.should.be.true;
        })
        
        it('app.factory 链式调用',function(){
            app.factory('baseVal',function(){
                return {
                    a:2,
                    b:3
                }
            })
            .factory('minus',function(){
                return function(a,b){
                    return a-b;
                }
            })
            .factory('plus',function(){
                return function(a,b){
                    return a+b;
                }
            });
            var invoke = false; 
            app.injector.invoke.should.be.a('function');
            app.injector.invoke(function(baseVal,minus,plus){
                invoke = true ;
                expect(minus(baseVal.a,baseVal.b)).to.be.equal(-1);
                expect(plus(baseVal.a,baseVal.b)).to.be.equal(5);
            });

            invoke.should.be.true;
        })
    });

})