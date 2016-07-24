var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

var Class = require('../javascript/framework.js');

describe('My Framework',function(){

    it('Shoud be a Class',function(){
        var jobs = new Class();
        expect(jobs).to.be.ok();
    });

    it('Should have method',function(){
        var Person = new Class({
            sayHello:function(){
                
            }
        });

        var jobs = new Person();
        job.should.have.properties(['sayHello']);
    });

    it('Should have constructor',function(){
        var Person = new Class({
            initialize:function(name){
                this.name = name;
            }
        });

        var jobs = new Person('jobs');
        var gates = new person('gates');

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

        man.should.not.have.properties(['coding']);
        jobs.should.have.properties(['sayHello','coding']);

    })

})