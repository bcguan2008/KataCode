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
		jobs.should.have.properties(['sayHello','show']);
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
			run:function(){}
		});

		var Engineer = Person.extend({
			work:function(){}
		});

		var CTO = Engineer.extend({
			makePolicy:function(){}
		});

		var man = new Man();
		var jobs = new Engineer();
		var james= new CTO();
		

		jobs.should.have.properties(['work','sayHello'])
		jobs.should.not.have.properties(['makePolicy']);
		jobs.should.not.have.properties(['run']);

		james.should.have.properties(['sayHello','work','makePolicy']);
		man.should.have.properties(['sayHello','run']);
		man.should.not.have.properties(['work']);
		man.should.not.have.properties(['makePolicy']);
	})
});