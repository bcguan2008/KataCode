var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

var Class = require('../javascript/framework.js');

describe('My Framework',function(){

    it('Shoud be a Class',function(){
        var jobs = new Class();
        jobs.should.be.a('function');
    });

    it('Should have method',function(){
        var Person = new Class({
            sayHello:function(){
            }
        });

        var jobs = new Person();
        jobs.should.have.property('sayHello');
    });

    it('Should have constructor',function(){
        var Person = new Class({
            initialize:function(name){
                this.name = name;
            }
        });

        var jobs = new Person('jobs');
        var gates = new Person('gates');

        jobs.name.should.equal('jobs');
        gates.name.should.equal('gates');
    });

    it('Should be extended',function(){
        var Person = new Class({
            sayHello:function(){
            }
        });

        var Engineer = Person.extend({
            coding:function(){
            }
        });

        var man = new Person();
        var jobs = new Engineer();

        man.should.not.have.property('coding');
        jobs.should.have.property('sayHello');
        jobs.should.have.property('coding');
    });

    it('Should have owner constructor',function(){
        var Person = new Class({
            sayHello:function(){

            }
        });

        var Engineer = Person.extend({
            coding:function(){

            }
        });

        var man = new Person();
        var jobs = new Engineer();
        
        expect(man instanceof Person).to.be.true;
        expect(jobs instanceof Engineer).to.be.true;
        
        expect(jobs.constructor).to.be.equal(Engineer);
        expect(jobs.constructor).not.to.be.equal(Person);
    });
    

})