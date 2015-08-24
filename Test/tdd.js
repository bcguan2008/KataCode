var assert = require('assert');
var should = require('should');

var Class = require('../Javascript/myframework');


describe('要有自己的框架',function(){
	it('要有类',function(){

		var jobs = new Class('jobs');
		jobs.should.be.ok;
	});

	it('should have method',function(){
		var Person = new Class({
			sayHello:function(){},
			show:function(){}
		});

		var jobs = new Person();

		// 知识点链接创造力
		jobs.should.be.have.properties(['sayHello','show']);
	});


	it('should have constructor',function(){
		var Person = new Class({
			initialize : function(name){
				this.name = name;
			}
		});

		var jobs = new Person('jobs');
		var gates = new Person('gates');

		/*jobs.initialize('jobs');*/

		jobs.name.should.eql('jobs');
		gates.name.should.eql('gates')
	})

	it('should have inherits',function(){
		var Person = new Class({
			sayHello :function(){}
		});

		var Man = Person.extend({
			work:function(){}
		});

		var jobs = new Man();

		jobs.should.have.properties(['sayHello','work']);

	})
});